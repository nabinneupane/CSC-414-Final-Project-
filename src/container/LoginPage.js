import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {Redirect} from 'react-router';

const request = require('request');



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      emailAddress: '',
      password: '',
      errorMessage: '',
      redirect: false,
      permission: false
    }
  }

  onChangeEmailAddress(e) {
    this.setState({
      emailAddress: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }


  handleSubmit(e) {
    e.preventDefault();


    //Compare the email address
    let userData = {
      emailAddress: this.state.emailAddress,
      password: this.state.password
    }


    var options =
      {
        uri: 'http://127.0.0.1:3000/loginPage',
        method: 'POST',
        json: userData
      };


    request(options, (err, res, body) => {

      if (body.message === 1)
        this.setState({
          errorMessage: 'Email is not registered. Please sign up first',
          password: '',
          emailAddress: ''
        })

      else if (body.message === 2)

        this.setState({
          errorMessage: 'Incorrect password. Please try again',
          password: ''
        })
      else if (body.message === 3)
        this.setState({ errorMessage: 'The email is not verified. Please verify the email first to continue.' })
      else
        if (body.permission === 0) {
          this.setState({
            errorMessage: ' ', password: '',
            redirect: true, permission: false
          })
        }
        else {
          this.setState({
            errorMessage: ' ', password: '',
            redirect: true, permission: true
          })
        }

    });


  }

  render() {
    const giveValue = this.state.redirect
    const givePermission = this.state.permission

    if (giveValue === true) {
      if (givePermission === true) {
        return <Redirect to={{ pathname: "/MainPageAd", state: { email: this.state.emailAddress } }}/>
      }
      else
        return <Redirect to={{ pathname: "/MainPage", state: { email: this.state.emailAddress } }}/>
    }

    return (
      <div className="login-formFormat" >
        <h1> <span>IT-Ticket System</span> </h1>
        <form onSubmit={this.handleSubmit} >
          <div>
            <label htmlFor ="Email"> Email </label>
            <input type="Email" id="Email" placeholder="Type Email " value={this.state.emailAddress}
              onChange={this.onChangeEmailAddress} required/>
          </div>

          <div>
            <label htmlFor="password">Password </label>
            <input type="password" id="password" placeholder=" Type Password"
              value={this.state.password}
              onChange= {this.onChangePassword}  required/>
          </div>

          <div>
            <p>
              <span style={{ color: "red" }} >{this.state.errorMessage}  </span> </p>
            <label htmlFor="remember"> <br/>
              <input type="checkbox" defaultChecked="checked" name="remember"/> Remember me
            </label>

            <Link to="/forgotPassword" style={{ marginLeft: "60px" }}> Forgot Password?</Link>
          </div> <br/>

          <div>
            <input  type="submit" value="Login" />
          </div>
          <div className="abc text-center pt-3">
            Don't have an account? 
            <Link to="/signUp" className="button"> Sign up </Link>
          </div>
        </form>
        
      </div>
    );
  }

}



