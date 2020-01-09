import React from "react"
import '../bootstrap.css'
import Footer from "../footer.js"
import NaviBar from "./navbar.js"
import TicketList from "./TicketList.js"

function MyTickets(props) {
    const { email } = props.location.state;
    const {info} = props.location.state;
    const {dataLoaded}=props.location.state;
    console.log("mytickets",props)
    console.log("mytickets inffo:", info)
    return (
        <div>

            <NaviBar email={email} info={info} dataLoaded={dataLoaded}/>

            <TicketList email={email} info={info} dataLoaded={dataLoaded}/>

            <Footer email={email} dataLoaded={dataLoaded}/>
        </div>

    )
}
export default MyTickets;