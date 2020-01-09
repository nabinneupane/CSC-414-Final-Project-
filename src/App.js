import React from 'react';
import Login from './container/LoginPage';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import forgotPass from './container/forgotPassword';
import SignUp from './container/signUp';
import MainPage from './dashboard/UserAssets/MainPage';
import Verification from './container/verify';
import Body  from './dashboard/UserAssets/body';
import OpenTicket from './dashboard/UserAssets/openticket';
import MyTickets from './dashboard/UserAssets/mytickets';
import Stats from './dashboard/UserAssets/stats';
import stats from './dashboard/AdminAssets/statsAdmin';
import ProfileAdmin from './dashboard/AdminAssets/profileAdmin';
import Status from './dashboard/status';
import forms from './dashboard/form';
import MainPageAdm from './dashboard/AdminAssets/MainPageAd';
import Mytickets from './dashboard/AdminAssets/myTicketsAd';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProfileUser from './dashboard/UserAssets/profile'

function App() {
  return (
    <div className ="container"> 
      <Router>
      <Switch> 
        <Route exact path ="/" component={Login}/>
        <Route exact path="/forgotPassword" component={forgotPass}/>
        <Route exact path="/signUp" component={SignUp}/>
        <Route exact path="/MainPage" component={MainPage}/>
        <Route exact path ="/verify" component= {Verification}/>
        <Route exact path="/Body" component={Body}/>
        <Route exact path="/openticket" component={OpenTicket}/>
        <Route exact path="/mytickets" component={MyTickets}/>
        <Route exact path="/myTicketsAd" component={Mytickets}/>
        <Route exact path="/statsAdmin" component={stats}/>
        <Route exact path="/stats" component={Stats}/>
        <Route exact path="/status" component={Status}/>
        <Route exact path="/form" component={forms} />
        <Route exact path="/MainPageAd" component={MainPageAdm}/>
        <Route exact path='/profileAdmin' component={ProfileAdmin}/>
        <Route exact path='/profile' component={ProfileUser}/>
       
      </Switch>
      </Router>
      </div>
  );
}


export default App;
