//
//  Page for the admin to be able to view their account information
//  and will allow the admin to add users
//

import NaviBarAd from "./navbar_admin";
import Footer from "../footer";
import React, {Component} from "react";
import "../bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


class ProfileAdmin extends Component {
     

    render(){

        const { email } = this.props.location.state;
        const {detail} = this.props.location.state;
        console.log(email)
      return(
        <div>
        <NaviBarAd email={email} detail={detail} />
        <Container>
            
            <h3>Admin Profile</h3>
            <hr />
            Account Preferences
             <br/>
            <h4> Hi, {email}. This is your profile </h4>
            <hr />
                
                
            <Row>
                <Col > 
                <Form style={{ paddingBottom: "5%"}}>   
                <h5>Email address</h5>
                here is where we can put their email address
                </Form>
                </Col>
                <Col>
       
                </Col>
                <Col className="text-center">
                    <Form style={{paddingTop: "2%", paddingBottom: "2%"}}>
                    <Button variant="dark" size="sm">Change</Button>
                    </Form>
                </Col>
            </Row>  
            <Row>
                <Col>
                    <h5>Change password</h5>
                </Col>    
                <Col>
                <space/>
                </Col>
                <Col className="text-center">
                    <Form style={{paddingTop: "2%", paddingBottom: "2%"}}>
                    <Button variant="dark" size="sm">Change</Button>
                    </Form>
                </Col>
            </Row>
            <hr/>
            <Row  className="text-center">
            <Col><space/></Col>
            <Col>
                <Form style={{paddingTop: "2%", paddingBottom: "2%"}}>
                <Button variant="dark">Add User</Button>
                </Form>
            </Col>
            <Col></Col>
            </Row>

        </Container>
        <Footer />
        </div>
       )
    }
}
export default ProfileAdmin