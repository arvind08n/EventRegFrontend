import React, {Component} from 'react';
import {Jumbotron } from 'reactstrap';
import axios from 'axios';
import EventList from './EventListComponent';
import '../App.css';

const Jumbo = () => {
    return(
        <Jumbotron className="jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-12">
                        <h1>Welcome</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}

class EventReg extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventId: this.props.match.params.eventId,
            event: {}
        };
    }

    componentDidMount(){
        axios
            .get('http://localhost:8082/user/' + this.state.eventId + '/eventreg')
            .then(res => {
                this.setState({
                    event: res.data
                })
            })
            .catch(err => {
                console.log("Error from eventreg");
            })
    };



    render(){
        const event = this.state.event;
        
        
        console.log(event);
        let EventItem = <div >
            <h3 className="head">{event.name}</h3>
            <div className="row">
                <div className="col-12 col-sm-4">
                    <img src={event.imageUrl}  className="unstyle" />
                    
                </div>
                <div className="col-12 col-sm-6" className="text">
                    <p>{event.description}</p>
                    <h4>Event Fee: {event.eventfee}</h4>
                    <h6>Scroll down to register....</h6>
                </div>
            </div>
            
            
        </div>
        return(
            <div>
                <Jumbo />
                <div className="container">
                    {EventItem}
                </div>
            </div>
        );
    }
}

export default EventReg;