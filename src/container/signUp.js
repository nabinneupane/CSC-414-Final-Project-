import {Form} from 'reactstrap';
import"./login.css"
import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {Redirect} from 'react-router';
//import  InputGroup
 //const nodemailer = require("nodemailer");
const request = require('request');

export default  class SignUp extends Component 
{
    constructor (props)
    {

        super(props);

    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname= this.onChangeLname.bind(this);
    this.onConfirmPassword= this.onConfirmPassword.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangeEmail= this.onChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            Fname:'',
            Lname:'',
            password:'',
            Email:'',
            confirmPassword:'',
            errorMessage:' ',
            redirect:false
        }
    }

    onChangeFname(e) 
    {
        this.setState({
        Fname: e.target.value
        })
    }

    onChangeLname(e) 
    {
        this.setState({
        Lname: e.target.value
        })
  }
  
   onConfirmPassword(e) 
    {
       this.setState({
           confirmPassword: e.target.value
       })
  }

  onChangePassword(e) 
    {
        this.setState({
        password: e.target.value
        })
  }

   onChangeEmail(e) 
    { 
         this.setState({
        Email: e.target.value
        })
    }
    


    handleSubmit(e) 
     {
            e.preventDefault();

            
            if (this.state.password !== this.state.confirmPassword){
                this.setState({errorMessage:' Error. Password Does not match'})
            }
            else {
            //POST Request 
            let userData={
                Fname:this.state.Fname,
                Lname:this.state.Lname,
                password:this.state.password,
                Email:this.state.Email
            }



    var options =
     {
            uri: 'http://127.0.0.1:3000/signup',
         method: 'POST',
        json:userData
    };

        request(options,(err, response, body)=> {
            if (body.message === 1)
              this.setState({errorMessage:'Email is already registered. Please sign in to continue',
                              password:'',
                            confirmPassword:''})
            else if (body.message=== 2) {
                this.setState({errorMessage:'Please check your email to verify your account and then login in to continue',
                              password:'',
                            confirmPassword:'',
                        redirect:true})
            
            
            }           
        });



            this.setState ({
                Fname:'',
                Lname:'',
                password:'',
                Email:'',
                confirmPassword:'', 
                errorMessage: ' '               
             })
            }
        }

    
    render () {
        const pageReloading = this.state.redirect;
        if (pageReloading===true)
        {
            return <Redirect to="/verify"/>
        }
    return (
    <div className="forSignupForm">
    <Form onSubmit={this.handleSubmit}>
    
        <h3 style={{textAlign:"center"}}> Sign up </h3> 
    <label htmlFor="Fname"><b> First Name </b></label> 
    <input type="text"  placeholder="Enter First Name" name="Fname" pattern="[a-z\sA-Z]+" title="Must contain only letters"
    value ={this.state.Fname} onChange={this.onChangeFname} required/>
    <br/>
    <label htmlFor="Fname"><b> Last Name </b></label> 
    <input type="text" placeholder="Enter Last Name" name="Lname" pattern="[a-z\sA-Z]+" title="Must contain only letters"
    value ={this.state.Lname} onChange={this.onChangeLname} required/>
    <label htmlFor="Email"><b> Email  </b></label> 
    <input type="Email" placeholder="Enter Email" name="Email" pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
        title="Must be in proper email format"
    value ={this.state.Email} onChange={this.onChangeEmail} required/>
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password"  placeholder="Enter Password" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
    value ={this.state.password} onChange={this.onChangePassword} required/>
    <label htmlFor="psw"><b> Retype Password</b></label>
    <input type="password"   placeholder="Enter Password" name="psw"
    value ={this.state.confirmPassword} onChange={this.onConfirmPassword} required/>
    <span style={{color:"red"}} >{this.state.errorMessage}  </span>
 <hr/>
    <div>
    <button type="submit" className="registerBtn">Register</button>
    <Link to="/" style={{marginLeft:"200px"}}> Go back </Link> 
    </div> 
    
    </Form>
    </div> 
    )
}
}

