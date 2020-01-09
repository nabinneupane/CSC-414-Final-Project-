import {Form, Label, Input, Button} from 'reactstrap';
import React from 'react';
import './login.css'
import { Link} from 'react-router-dom';


class forgotPass extends React.Component {
  render() {
    return (
      <div>
        <Form className="login-formForgot">
          <div>
            <h2> Did you forget your password?</h2>
            <span style={{ color: '#000', opacity: .54 }}> Enter your email address and we will send you a password reset link.</span>
          </div>
          <div>
            <h4><Label for="Email"className='textBold'>Email address </Label></h4>
            <Input type="email" id="Email" placeholder="enter your email here...."/>
          </div>
          <Button className="btn=lg btn-dark btn-block"> Request Resent Link </Button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Link to="/"> Back to Sign in</Link>
        </Form>
      </div>

    );
  }
}

export default forgotPass;