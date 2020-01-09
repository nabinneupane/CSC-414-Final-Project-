import React, {Component} from "react"
import '../bootstrap.css'
import { Link } from 'react-router-dom';


class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: this.props.EmailAddress,
            info:this.props.info,
            dataLoaded:this.props.dataLoaded

        }
        console.log(this.state.Email)
        console.log("Body", this.props)
    }
    render() {
        return (
            <div>
                <div className="parent">
                    <div className="div1">
                        <Link to={{ pathname: "/openticket", state: { email: this.state.Email, info:this.state.info, dataLoaded:this.state.dataLoaded } }}> Open Ticket </Link>
                    </div>

                    <div className="div2">
                        <Link to={{ pathname: "/mytickets", state: { email: this.state.Email, info:this.state.info, dataLoaded:this.state.dataLoaded } }}>My Tickets </Link>
                    </div>

                    <div className="div3">
                        <Link to={{ pathname: "/status", state: { email: this.state.Email, info:this.state.info, dataLoaded:this.state.dataLoaded } }}> Ticket Status </Link>
                    </div>

                    <div className="div4">
                        <Link to={{ pathname: "/stats", state: { email: this.state.Email, info:this.state.info, dataLoaded:this.state.dataLoaded } }}> Stats </Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Body;