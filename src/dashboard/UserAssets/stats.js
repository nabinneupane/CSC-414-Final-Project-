import React from "react"
import '../bootstrap.css'
import NaviBar from "./navbar.js"
import CanvasJSReact from '../canvasjs.react'
import Footer from "../footer.js"

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class  Stats extends React.Component{
    render() {
    console.log(this.props.location.state)
    const {closedTicketCount} = this.props.location.state.info
    const {openTicketCount} = this.props.location.state.info
    const {info} = this.props.location.state
    const {email} = this.props.location.state
    const {dataLoaded} = this.props.location.state

    console.log(dataLoaded)
       const options = {
			animationEnabled: true,
			title: {
				text: "Here is the display of your tickets till date",
                fontSize: 20
			},
			subtitles: [{
				text: "Total Tickets",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				//yValueFormatString: "#####",
				dataPoints: [
					{ name: "Open Ticket", y: openTicketCount },
					{ name: "Closed Ticket", y: closedTicketCount },
				]
			}]
		}
    return(
        <div>
        
        <NaviBar email={email} info={info} dataLoaded={dataLoaded}/>
        <div style={{marginLeft:"10%", fontSize:"24px"}}> <b> Hi, {info.name[0].firstName} </b></div>
        <div style={{marginTop:"3%"}}>
         <CanvasJSChart options = {options}/>
        </div>
        <div>
         <Footer email={email} dataLoaded={dataLoaded}/>
        </div>
    </div>
    )
}
}
export default Stats;