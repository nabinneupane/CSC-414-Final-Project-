//
//  This is the code for a universal navbar for all
//  web pages for continuity
// 
//
import React from "react"
import "../bootstrap.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import { NavLink} from 'react-router-dom'

function NaviBar(props) {
    console.log("NAVI", props)
    return (
        <div>
            <Form style = {{ paddingBottom: "3%" }}>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={NavLink} to={{ pathname: "/MainPage", state: { email: props.email, info:props.info } }}>FixIT</Navbar.Brand>
                    <Nav className="mr-auto" style = {{ marginLeft: "20px", fontSize:"18px", marginTop:"8px" }}>
                        <Nav.Link as={NavLink} to={{ pathname: "/MainPage", state: { email: props.email, info:props.info } }}><i className="fas fa-home"/> Home</Nav.Link>
                         <Nav.Link as={NavLink} to={{ pathname: "/openticket", state: { email: props.email, info:props.info } }}> <i className="fas fa-ticket-alt" /> New Ticket</Nav.Link>
                    </Nav>

                    <Nav className = "ml-auto" style = {{ marginRight: "15px", fontSize:"18px", marginTop:"8px" }}>
                        <Nav.Link as={NavLink} to={{ pathname: "/profile", state: {email: props.email, info:props.info } }}> Profile</Nav.Link>

                        <Nav.Link href="/"><i class="fas fa-sign-out-alt"></i> Sign Out</Nav.Link>
                    </Nav>

                </Navbar>
                <div style = {{ paddingLeft: "2%" }}>
                    <h4>Help Us Help You. </h4>
                </div>
                </Form>
                </div>
    )
}

export default NaviBar;