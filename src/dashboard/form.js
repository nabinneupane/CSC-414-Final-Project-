import React from "react"
import './bootstrap.css'
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import NaviBar from "./UserAssets/navbar"


function forms(){
   return(  <Container>

    <NaviBar />

      <Form style = {{paddingTop: "20px", paddingLeft: "30px"}}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="textarea" placeholder="" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="textarea" placeholder="" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Department</Form.Label>
    <Form.Control as="select">
      <option>Library</option>
      <option>Engineering</option>
      <option>Cafeteria</option>
      <option>Yo momma's house</option>
      <option>Just another</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form> </Container>

)
}




export default forms;