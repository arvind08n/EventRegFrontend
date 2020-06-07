import React, { Component } from 'react';
import { Switch, Router, Redirect, Route } from 'react-router-dom';
import StarterComponent from './StarterComponent';
import Dashboard from './DashboardComponent';
import EventList from './EventListComponent';
import UserReg from './RegisterComponent';
import EventReg from './EventRegComponent';

import UserList from './UserListComponent';
import UpdateEvent from './UpdateEventComponent';

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path ="/" component={StarterComponent} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route exact path = "/:userId/events" component={EventList} />
                    <Route path = "/register-user" component={UserReg} />
                    <Route exact path = "/:eventId" component = {EventReg} />
                    <Route exact path = "/event/dashboard/:eventId" component={UserList} />
                    <Route exact path = "/event/dashboard/:eventId/update" component={UpdateEvent} />
                </Switch>
            </div>
        )
    }
}


export default Main;