import React , { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import EventCard from './EventCardComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import "../App.css";

const Jumbo = () => {
    return(
        <Jumbotron className="jumbotron">
            <div className="container">
                <div className="row row-header">
                <div className="col-12 col-sm-1">
                        <i className="fa fa-dashboard fa-3x " aria-hidden="true" ></i>
                        
                    </div>
                    
                <div className="col-12 col-sm-11">
                        <h1>Dashboard</h1>
                        
                    </div>
                    
                </div>
            </div>
        </Jumbotron>
    )
}

class EventList extends Component{
    constructor(props){
        super(props);
        this.state={
            events: []
        };
    }

    componentDidMount(){
        axios
            .get('http://localhost:8082/user/:userId/events')
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
            <div>
            <div>
                <Header />
                <Jumbo />
            </div>
            <div className="EventList">
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center"><i className="fa fa-list " aria-hidden="true" style={{marginRight: '7px'}}></i>Events List</h2>

                        </div>
                    </div>
                    <div className="list">
                    
                        {eventList}
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        );
        
    }
}

export default EventList;