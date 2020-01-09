import React from "react"
import '../bootstrap.css'
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"


function TicketList(props){
   console.log("openticket",props.detail.openTicket)
      var openTicket =props.detail.openTicket
      if (openTicket === undefined)
        openTicket = []
     
      var closedTicket = props.detail.closedTicket
      if (closedTicket === undefined)
          closedTicket=[]
      
      console.log("closed ticket is",closedTicket)
 
    return(
        <Container>
        <span style={{fontSize:"20px" ,fontWeight:"bold"}}>List Of Tickets</span>
       
    <Accordion defaultActiveKey="0" style={{marginTop:"2%"}}>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0" style={{fontWeight:"bold",fontSize:"15px"}}>
      Open Tickets
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Number</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Department</th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(openTicket).length ===0 ? <td colspan="5"> <h3 style={{ color: '#000', opacity: .54, textAlign:"center" }}> yehhh !!! There are no any tickets to solve</h3> </td>:
    openTicket.map((user,i) => 
          <tr key ={i}>
          <td >{i+1} </td>
          <td>{user.firstName} </td>
          <td>{user.lastName} </td>
          <td>{user.department} </td>
          </tr>
      )}
        </tbody>
       </Table>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Closed Tickets
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Table striped bordered hover variant="dark">
      <thead>
    <tr>
      <th>Number</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Department</th>
      
    </tr>
  </thead>
  <tbody>
    
      { Object.keys(closedTicket).length ===0 ? <td colSpan="5"> <h3 style={{ Color: '#000', opacity: .54, textAlign:"center", color:"silver" }}>There are no any closed tickets </h3> </td>:  
        closedTicket.map((user,i) => 
          <tr key ={i}>
          <td >{i+1} </td>
          <td>{user.firstName} </td>
          <td>{user.lastName} </td>
          <td>{user.department} </td>
         
          </tr>
      )}
  
        </tbody>
       </Table>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

</Container>

    )
}
export default TicketList;