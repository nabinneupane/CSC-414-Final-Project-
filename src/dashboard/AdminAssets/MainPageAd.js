import NaviBarAd from "./navbar_admin"
import React, {Component} from "react"
import DashboardAdm from "./dashboard_admin"
import TicketList from "./ticketList"
import Form from "react-bootstrap/Form"
//const request = require('request');


class  MainPageAdm extends Component {
  constructor(props){
    super(props);
    this.state={posts:[], dataLoaded:false};
  }

  componentDidMount(){
    let self= this
  fetch('http://127.0.0.1:3000/MainPageAd',{
    method:'post'
  })
    .then (function(response){
      if (response.status>=400){
        throw new Error("Bad response from server");
      } 
      return response.json();})
    .then(function(data){
     
      self.setState({posts:data, dataLoaded:true})
      console.log(self.state.posts)
    })   
  }
    
  render() {
    const { email } = this.props.location.state
    if (this.state.dataLoaded === false )
    {
      return (<h1 style={{textAlign:"center", verticalAlign:"middle"}}> Please Wait... loading data</h1>)
    }
  return (
    <div>
      <NaviBarAd  email={email} detail={this.state.posts}/>
      <Form style = {{ paddingBottom: "5%" }}>
        <DashboardAdm email={email}  detail={this.state.posts}/>
      </Form>
      <Form style = {{ paddingBottom: "5%" }}>
        <TicketList email={email}  detail={this.state.posts}/>
      </Form>
    </div>
  
  )
  }
}
export default MainPageAdm;
