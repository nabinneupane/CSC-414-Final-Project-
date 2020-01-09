//
//  Page for the admin to be able to view their account information
//  and will allow the admin to add users
//

import NaviBar from "./navbar";
import Footer from "../footer";
import React, {Component} from "react";
import "../bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


class ProfileUser extends Component {
     

    render(){
        console.log(this.props)
         const { email} = this.props.location.state;
    const {info} = this.props.location.state;
    const {dataLoaded}= this.props.location.state;
    console.log("mytickets",this.props)
    console.log("mytickets inffo:", info.name[0])
      return(
        <div>
        <NaviBar email={email} info={info} dataLoaded={dataLoaded}/>

        <Container>
            
            <h3>User Profile</h3>
            
            <hr />
                
                
            <Row>
                <Col > 
                <Form style={{ paddingBottom: "5%"}}>
                <h5> First Name </h5> <br/>
                <h5> Last Name </h5>   <br/>
                <h5>Email address</h5> <br/>
                </Form>
                </Col>
                <Col className="text-center">
                <Form style={{ paddingBottom: "10%"}}>
                    <h5> {info.name[0].firstName} </h5> <br/>
                    <h5> {info.name[0].lastName} </h5>  <br/>
                    <h5> {email} </h5> <br/>
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
            
            </Row>

        </Container>
        <Footer />
        </div>
       )
    }
}
export default ProfileUser