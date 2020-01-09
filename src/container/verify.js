import {Form, Label, Input, Button} from 'reactstrap';
import React from 'react';
import './login.css'
import {Redirect} from 'react-router';
const request = require('request');

class Verification extends React.Component {


    constructor(props) {
        super(props);
        this.onChangeToken = this.onChangeToken.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            SecretToken: '',
            Email: '',
            errorMessage: '',
            redirect: false
        }
    }

    onChangeToken(e) {
        this.setState({
            SecretToken: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        let userData = {

            Email: this.state.Email,
            SecretToken: this.state.SecretToken
        }


        var options =
            {
                uri: 'http://127.0.0.1:3000/verify',
                method: 'POST',
                json: userData
            };


        request(options, (err, res, body) => {
            if (body.message === 1) {
                this.setState({
                    errorMessage: 'Please enter a valid email address',
                    SecretToken: ''
                })
            }
            else if (body.message === 2) {
                this.setState({
                    errorMessage: 'Please enter a correct token',
                    SecretToken: ''
                })
            }
            else {
                this.setState({
                    errorMessage: ' ', SecretToken: '',
                    emailAddress: '', redirect: true
                })
                console.log("please proceed")

            }


        });

    }

    render() {
        const pageReloading = this.state.redirect;
        if (pageReloading === true) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <h3> Please verify your account </h3>
                        <span style={{ color: '#000', opacity: .54 }}> Enter the secret token sent on your email.</span>
                    </div>
                    <div>
                        <h4><Label for="Email">Email </Label></h4>
                        <Input type="Email" id="Email" placeholder="enter your email here...." value = {this.state.Email}
                            onChange={this.onChangeEmail} style={{ width: "20%" }}
                            required/>
                    </div>
                    <div>
                        <h4><Label for="secretToken">Secret Token </Label></h4>
                        <Input type="text" id="secretToken" placeholder="enter your secret token here...." value = {this.state.SecretToken} onChange={this.onChangeToken} style={{ width: "20%" }} required/>
                    </div>
                    <p>
                        <span style={{ color: "red" }} >{this.state.errorMessage}  </span> </p>

                    <Button className="btn=lg btn-dark btn-block"style={{ width: "20%" }} type= "submit"> Verify my account </Button>
                </Form>
            </div>

        );
    }
}

export default Verification;