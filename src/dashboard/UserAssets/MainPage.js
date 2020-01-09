import NaviBar from "./navbar"
import React,{Component} from "react"
import Dashboard from "./dashboard"


class  MainPage extends Component {
    constructor(props){
      super(props)
      this.state=
      ({
        EmailAddress:this.props.location.state.email, 
        informations:'',
        dataLoaded:false})
    }

     componentDidMount(){
     
    let self= this

    const Email = this.state.EmailAddress
    //console.log("Email is:",Email)
  fetch('http://127.0.0.1:3000/MainPage',{
    method:'POST',
     headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'
  },
    body: JSON.stringify({Email})

  })
    .then (function(response){
      if (response.status>=400){
        throw new Error("Bad response from server");
      } 
      return response.json();})
    .then(function(data){

     self.setState({informations:data, dataLoaded:true})
      //console.log(self.state.informations)
    }) 
   }


  render(){
    const { email } = this.props.location.state;
     if (this.state.dataLoaded === false )
     {
       return (<h1 style={{textAlign:"center", verticalAlign:"middle"}}> Please Wait... loading data</h1>)
     }
  return (
    <div>
      <NaviBar email={email}  info={this.state.informations} dataLoaded={this.state.dataLoaded}/>
      <Dashboard email={email} info={this.state.informations} dataLoaded={this.state.dataLoaded}/>
    </div>
  )
  }
}
export default MainPage;
