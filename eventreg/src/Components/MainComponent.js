import React, { Component } from 'react';
import { Switch, Router, Redirect, Route } from 'react-router-dom';
import StarterComponent from './StarterComponent';

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path ="/" component={StarterComponent} />
                </Switch>
            </div>
        )
    }
}


export default Main;