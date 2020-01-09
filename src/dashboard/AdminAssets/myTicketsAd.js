import React from "react"
import '../bootstrap.css'
import Footer from "../footer.js"
import NaviBarAd from "./navbar_admin.js"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Form from "react-bootstrap/Form"

import Modal from "react-bootstrap/Modal"


class Mytickets extends React.Component {
    constructor(props) {
        super(props)
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        
        this.state = ({ onClickedOpen: null, selectValue: '', ticketNumber:'' })
    }


    openModal(e, index) {
        this.setState({
            onClicked: index
        })
    }

    closeModal(value) {
        this.setState({
            onClicked: null
        })
    }

    
    componentWillMount() {
        let self =this
        const ticketStatus = self.state.selectValue
        console.log("This is ticketStatus", ticketStatus)
        fetch('http://127.0.0.1:3000/myTicketsAd',{
    method:'POST',
     headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'
  },
    body: JSON.stringify({ticketStatus})

  })
    .then (function(response){
      if (response.status>=400){
        throw new Error("Bad response from server");
      } 
      return response.json();})
    .then(function(data){
      //console.log(self.state.informations)
    }) 
   }
    

    render() {
        const { email } = this.props.location.state;
        const {detail} = this.props.location.state;

        console.log(detail)
        console.log("The selected value is: ", this.state.selectValue)
        var openTicket = detail.openTicket
        if (openTicket === undefined)
            openTicket = []
        console.log("openticket is", openTicket)
        var closedTicket = detail.closedTicket
        if (closedTicket === undefined)
            closedTicket = []
        console.log("closedTicket", closedTicket)

        console.log("TicketNumerb is: ", this.state.ticketNumber)

        return (
            <div>
                <NaviBarAd email={email} detail={detail} />

                <h3> List of Tickets </h3>
                <hr/>
                <h4 style={{ textAlign: 'center' }}> Open Tickets </h4>
                <Row className="text-center" >
                    { Object.keys(openTicket).length === 0 ? <h3 style={{ Color: 'black', opacity: .54, textAlign: "center", marginLeft: "40%" }}>There are no any Open tickets </h3> :
                        openTicket.map((user, i) => {
                            return (
                                <div key ={i}>
                                    <Col className="mt-4 ml-4 col-lg-3 d-flex align-items-stretch">
                                        <Form style={{ paddingBottom: "5%" }} onClick={(e) => { this.openModal(e, i); this.setState({ticketNumber:user.number}) } }>
                                            <Card bg="dark" text="white" className="text-center" style={{ width: '14rem', height: '13rem' }}>
                                                <Card.Header>  </Card.Header>
                                                <Card.Body>
                                                    <Card.Title>{user.firstName} {user.lastName} </Card.Title>
                                                    <Card.Text>
                                                        <span style={{ fontSize: '15px' }}> Department: {user.department} </span>
                                                        <br/> <br/>
                                                        Click to see further Description
                                                    </Card.Text>
                                                </Card.Body>
                                                <span style={{ fontSize: '16px' }}> Status: {user.status} </span>
                                            </Card>
                                        </Form>
                                        <Modal id={i} show={this.state.onClicked === i} onHide={this.closeModal} animation={true}>
                                            <Modal.Header closeButton>
                                                <Modal.Title id="contained-modal-title-vcenter">Ticket for {user.firstName} {user.lastName} </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <h4 style={{ textAlign: "center" }}> Problem description </h4> <br/>
                                                <p> {user.description} </p>
                                                <Modal.Footer>
                                                    <Col style={{ marginLeft: '20%' }}>
                                                        <span> Change status: </span>
                                                        <select  as={ButtonGroup} title="Choose Status" id="bg-nested-dropdown" value={this.state.selectValue}
                                                            onChange={(e) => this.setState({ selectValue: e.target.value}) } >
                                                            <option style={{display:'none'}} label=" "></option>
                                                            <option  value="close">close</option>
                                                            <option  value="Elevate">Elevate</option>
                                                        </select>
                                                        <Button onClick={this.closeModal}  style={{ marginLeft: "20%" }}>Done</Button>
                                                    </Col>
                                                </Modal.Footer>
                                            </Modal.Body>
                                        </Modal>
                                    </Col>
                                </div>
                            )
                        }) }
                </Row>
                <hr/>
                <h4 style={{ textAlign: 'center' }}> Closed Tickets </h4>
                <Row className="text-center" >
                    { Object.keys(closedTicket).length === 0 ? <h3 style={{ Color: 'black', opacity: .54, textAlign: "center", marginLeft: "40%" }}>There are no any closed tickets </h3> :
                        closedTicket.map((user, i) => {
                            return (
                                <div key ={i + 10}>
                                    <Col className="mt-4 ml-4 col-lg-3 d-flex align-items-stretch">
                                        <Form style={{ paddingBottom: "5%" }} onClick={(e) => { this.openModal(e, i + 10) } }>
                                            <Card bg="dark" text="white" className="text-center" style={{ width: '14rem', height: '13rem' }}>
                                                <Card.Header>  </Card.Header>
                                                <Card.Body>
                                                    <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                                                    <Card.Text>
                                                        <span style={{ fontSize: '15px' }}> Department: {user.department} </span>
                                                        <span style={{ fontSize: '14px' }}>  Notes </span> <br/> <br/>
                                                        Click to see further Description
                                                    </Card.Text>
                                                </Card.Body>
                                                <span style={{ fontSize: '16px' }}> Status: {user.status} </span>
                                            </Card>
                                        </Form>
                                        <Modal id={i + 10} show={this.state.onClicked === i + 10} onHide={this.closeModal} animation={true}>
                                            <Modal.Header closeButton>
                                                <Modal.Title id="contained-modal-title-vcenter">Ticket for {user.firstName} {user.lastName} </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <h4 style={{ textAlign: "center" }}> Problem description </h4> <br/>
                                                <p> {user.description} </p>
                                                <Modal.Footer>


                                                    <Button onClick={this.closeModal}>Close</Button>

                                                </Modal.Footer>
                                            </Modal.Body>
                                        </Modal>

                                    </Col>
                                </div>

                            )
                        }) }
                </Row>
                <Footer />



            </div>

        )
    }
}
export default Mytickets;

