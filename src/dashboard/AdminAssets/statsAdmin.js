import React from "react"
import '../bootstrap.css'
import NaviBarAd from "./navbar_admin.js"
import CanvasJSReact from '../canvasjs.react'
import Footer from "../footer.js"

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class  stats extends React.Component{
    render() {
    console.log("stats Admin",this.props.location.state)
    const {closedTicketCount} = this.props.location.state.detail
    const {openTicketCount} = this.props.location.state.detail
    const {detail} = this.props.location.state
    const {email} = this.props.location.state
    const {dataLoaded} = this.props.location.state

    console.log("Dataloaded:",dataLoaded)
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
        
        <NaviBarAd email={email} detail={detail} dataLoaded={dataLoaded}/>
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
export default stats;