import React, {Component} from "react"
import '../bootstrap.css'
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
import { NavLink} from 'react-router-dom'


class Dashboard extends Component {
  render() {
console.log("Dashboard",this.props.dataLoaded)
    return (
      <div>
      <Card>
        <Card.Header style={{fontSize:"20px" ,fontWeight:"bold"}}>Dashboard</Card.Header>
        <Card.Body>

          <span style={{fontSize:"16px"}}>Hi Welcome to your Dashboard, {this.props.info.name[0].firstName} {this.props.info.name[0].lastName}!  </span>

          <Table responsive style={{paddingTop:"20%"}}>
            <tbody>
              <tr>
                <td> <Card bg="dark" text="white" style={{ width: '10rem', height:'5rem'}}>
                  <Card.Body style={{fontSize:"18px",textAlign:"center", marginTop:"5%"}}>
                    <Card.Link as={NavLink} to={{ pathname: "/openticket", state: { email: this.props.email, info:this.props.info, dataLoaded:this.props.dataLoaded } }}> New Ticket</Card.Link>
                  </Card.Body>
                </Card>
                  <br />
                </td>
                <td> <Card bg="dark" text="white" style={{ width: '10rem', height:"5rem" }}>
                  <Card.Body style={{fontSize:"18px",textAlign:"center", marginTop:"5%"}}>
                    <Card.Link as={NavLink} to={{ pathname: "/mytickets", state: { email: this.props.email, info:this.props.info , dataLoaded:this.props.dataLoaded} }}>My Tickets</Card.Link>
                  </Card.Body>
                </Card>
                  <br />
                </td>

              </tr>
            </tbody>
            <tbody>
            <tr>
              <td> <Card bg="dark" text="white" style={{ width: '10rem', height:"5rem" }}>
                <Card.Body style={{fontSize:"18px",textAlign:"center", marginTop:"5%"}}>
                  <Card.Link as={NavLink} to={{ pathname: "/status", state: { email: this.props.email, info:this.props.info,dataLoaded:this.props.dataLoaded } }}>Ticket Status</Card.Link>
                </Card.Body>
              </Card>
                <br />
              </td>
              <td> <Card bg="dark" text="white" style={{ width: '10rem', height:"5rem" }}>
                <Card.Body style={{fontSize:"18px",textAlign:"center", marginTop:"5%"}}>
                  <Card.Link as={NavLink} to={{ pathname: "/stats", state: { email: this.props.email, info:this.props.info,dataLoaded:this.props.dataLoaded } }}>Statistics</Card.Link>
                </Card.Body>
              </Card>
                <br />
              </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
     
      </div>
    )

  }
}
export default Dashboard;