import React, {Component} from "react"
import '../bootstrap.css'

import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"



class DashboardAdm extends Component {
  
   render() {
    return (
     
      <Card>
        <Card.Header style={{fontSize:"20px" ,fontWeight:"bold"}}>Administrator Dashboard</Card.Header>
        <Card.Body>
          <span  style={{fontSize:"16px"}} >Hi Welcome to your Dashboard, {this.props.email}!  </span>
          <Table responsive>
            <tbody>
              <tr>
                <td> <Card bg="dark" text="white" style={{ width: '10rem', height:'7rem' }}>
                  <Card.Header style={{fontSize:"18px",textAlign:"center", marginTop:"5%"}}>Total Tickets</Card.Header>
                  <Card.Body>
                    <Card.Title style={{fontWeight:"bold", textAlign:"center", marginTop:"-10%"}}> {this.props.detail.totalTicketCount}</Card.Title>
                  </Card.Body>
                </Card>
                  <br />
                </td>
                <td> <Card bg="dark" text="white" style={{ width: '10rem', height:'7rem' }}>
                  <Card.Header style={{fontSize:"18px",textAlign:"center", marginTop:"5%"}}>Open Tickets</Card.Header>
                  <Card.Body>
                    <Card.Title style={{fontWeight:"bold", textAlign:"center", marginTop:"-10%"}}>{this.props.detail.openTicketCount} </Card.Title>
                  </Card.Body>
                </Card>
                  <br />
                </td>
                <td> <Card bg="dark" text="white" style={{ width: '10rem', height:'7rem' }}>
                  <Card.Header style={{fontSize:"18px",textAlign:"center", marginTop:"5%"}}>Closed Tickets</Card.Header>
                  <Card.Body>
                    <Card.Title style={{fontWeight:"bold", textAlign:"center", marginTop:"-10%"}}>{this.props.detail.closedTicketCount}</Card.Title>
                  </Card.Body>
                </Card>
                  <br />
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    )
  }
}


export default DashboardAdm;