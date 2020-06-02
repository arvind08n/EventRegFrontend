import React , { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class EventList extends Component{
    constructor(props){
        super(props);
        this.state={
            events: []
        };
    }

    componentDidMount(){
        axios
            .get('http://localhost:8082/users/events')
            .then(res => {
                this.setState({
                    events: res.data
                })
            })
            .catch(err => {
                console.log('Error from event list');
            })
    };

    render(){
        
    }
}