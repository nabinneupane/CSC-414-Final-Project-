import React from "react"
import '../bootstrap.css'
import NaviBar  from "./navbar"
import { Modal,Form, Button, Row, Col } from "react-bootstrap";

import '../my.css'


const request = require('request');

class openticket extends React.Component {


  constructor(props) {
    super(props);
    console.log(this.props)

    // this.onChangeImage= this.onChangeImage.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangefName= this.onChangefName.bind(this);
    this.onChangelName = this.onChangelName.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      fName:'',
      lName:'',
      date: '',
      Email: this.props.location.state.email,
      description: '',
      department: '',
      image: '',
      onClicked:false
    };
  }


  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onChangefName(e){
    this.setState({
      fName:e.target.value
    })
  }

  onChangelName(e){
    this.setState({
      lName:e.target.value
    })
  }


  onChangePriority(e) {
    this.setState({
      priority: e.target.value
    })
  }

  // onChangeImage(e){
  //   let file = e.target.files[0];
  //   let reader = new FileReader();
  //   reader.onloadend= () =>{
  //     this.setState({image:reader.result})
  //   }
  //   reader.readAsDataURL(file);
  // }

  openModal(){
    this.setState({
        onClicked:true
    })
  }

  closeModal(){
    this.setState({
      onClicked:false
    })
  }


  handleSubmit(e) {
    e.preventDefault();

    //storing image 
    // const data= this.state.image.split(',')[1];
    // var raw = window.atob(data);
    // var rawlength = raw.length
    // //var array = new Unit8Array(new ArrayBuffer(rawlength))


    // for (var i=0; i<rawlength; i++)
    //   array[i] = raw.charCodeAt(i);

    //   var imge =[]
    // for (var i=0; i<rawlength;i++)
    //   imge.push((array[i]));



    let userData = {
      fName: this.state.fName,
      lName:this.state.lName,
      date: this.state.date,
      description: this.state.description,
      department: this.state.department,
      Email: this.state.Email
    }
    console.log(userData)

    var options =
      {
        uri: 'http://127.0.0.1:3000/openticket',
        method: 'POST',
        json: userData
      };
    request(options, (err, res, body) => {
      if (err) throw err
      
    })
    this.setState({fName:'',lName:'', date: '', department: '', description: '',onClicked:true })
    
  }
  render() {
    const { email } = this.props.location.state
    const {info} = this.props.location.state
    const {dataLoaded} = this.props.location.state
    console.log(email)
    
    return (
      <div>
        <NaviBar email={email} info={info} dataLoaded={dataLoaded}/>
        <form onSubmit={(event)=> { this.handleSubmit(event) ; this.openModal(event) }}>
        <div>
          <h4 style={{textAlign:"center"}}> Please Fill out the form in order to submit ticket </h4> <br/>
        </div>
        <Form.Group as={Row} controlId="formHorizontalfirstName">
          <Form.Label column sm={3}> First Name: </Form.Label>
          <Col sm={8}>
              <Form.Control type="text" placeholder="First Name" value={this.state.fName}  onChange={this.onChangefName} required/>
            </Col>
            </Form.Group>

             <Form.Group as={Row} controlId="formHorizontallastName">
          <Form.Label column sm={3}> Last Name: </Form.Label>
          <Col sm={8}>
              <input className="Form-control" type="text" placeholder="Last Name" value={this.state.lName}  onChange={this.onChangelName} required/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalDate">
          <Form.Label column sm={3}> Date:  </Form.Label>
          <Col sm={8}>
              <Form.Control type="date"  min="2019-01-01" max={new Date().toISOString().slice(0,10)} value={this.state.date} onChange={this.onChangeDate} required/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalDepartment">
          <Form.Label column sm={3}> Department:  </Form.Label>
          <Col sm={8}>
              <Form.Control type="text"  placeholder =" Enter your department here..." value={this.state.department} onChange={(e) => this.setState({ department: e.target.value }) } />
            </Col>
            </Form.Group>

              <Form.Group as={Row} controlId="gorHorizontalDescription">
                  <Form.Label column sm={5}>Problem Description:</Form.Label>
                   <textarea className="my-textbox form-control custom-control" rows="3" placeholder="Please explain your problem here..... " value={this.state.description} onChange={(e) => this.setState({ description: e.target.value }) }></textarea>
                     </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 3, offset: 2 }}>
                  <input type="submit" value="Submit" />
              </Col>
  </Form.Group>
       <Modal show={this.state.onClicked} onHide={this.closeModal} animation={true}>
             <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Ticket Submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <p>
          <h3> Thank you for your ticket Submission.</h3>  
          Our team would contact you within 24 hours time  </p>
           <Modal.Footer>
        <Button onClick={this.closeModal}>Close</Button>
      </Modal.Footer>
      </Modal.Body>
      </Modal>
        </form>
      </div>
    );
  }
}
export default openticket