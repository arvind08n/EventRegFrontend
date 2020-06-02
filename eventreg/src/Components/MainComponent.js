import React, { Component } from 'react';
import { Switch, Router, Redirect, Route } from 'react-router-dom';
import StarterComponent from './StarterComponent';
import Dashboard from './DashboardComponent';
import EventList from './EventListComponent';


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
                    <Route  path = "/users" component={EventList} />
                </Switch>
            </div>
        )
    }
}


export default Main;