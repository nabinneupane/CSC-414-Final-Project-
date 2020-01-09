import React from "react"
import "../bootstrap.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import { NavLink} from 'react-router-dom'

function NaviBarAd(props) {
    return (
        <div>
            <Form style = {{ paddingBottom: "3%" }}>
                <Navbar bg="dark" variant="dark">

                    <Navbar.Brand as={NavLink} to={{ pathname: "/MainPageAd", state: { email: props.email, detail:props.detail}}}>FixIT </Navbar.Brand>
                    <Nav className="mr-auto" style = {{ marginLeft: "20px", fontSize:"18px", marginTop:"8px" }}>
                        <Nav.Link as={NavLink} to={{ pathname: "/MainPageAd", state: { email: props.email, detail:props.detail}}}> <i className="fas fa-home"/> Home</Nav.Link>
                        <Nav.Link as={NavLink} to={{ pathname: "/myTicketsAd", state: { email: props.email, detail:props.detail}}}> <i className="fas fa-ticket-alt" /> My Tickets</Nav.Link>
                        <Nav.Link as={NavLink} to={{pathname:"/statsAdmin", state: { email: props.email, detail:props.detail}}}><i className="fas fa-ticket-alt" /> Stats  </Nav.Link>
                    </Nav>

                    <Nav className = "ml-auto" style = {{ marginRight: "15px", fontSize:"18px", marginTop:"8px" }}>
                        <Nav.Link as ={NavLink} to={{pathname:"/profileAdmin", state: { email: props.email, detail:props.detail}}}>  <i className="fas fa-user"> </i> Profile</Nav.Link>

                        <Nav.Link href="/"><i className="fas fa-sign-out-alt"></i> Sign Out</Nav.Link>
                    </Nav>


                </Navbar>

                <h4>Help Us Help You.</h4>
            </Form>
        </div>
    )
}

export default NaviBarAd;