import React , { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EventCard from './EventCardComponent';


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
        const events = this.state.events;
        console.log("Print events:" +events);
        let eventList;

        if(!events){
            eventList = "There is no events record!";
        }
        else{
            eventList = events.map((event, k) => 
                <EventCard event={event} key={k} />
            );
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <h2>Events List</h2>

                    </div>
                    <div className="col-12 col-md-3 m-1">
                        {eventList}
                    </div>
                </div>
            </div>
        );
        
    }
}

export default EventList;