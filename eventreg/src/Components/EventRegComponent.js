import React, {Component} from 'react';
import {Jumbotron } from 'reactstrap';
import axios from 'axios';
import EventList from './EventListComponent';


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
            <h3>{event.name}</h3>
            <h4>Description</h4>
            <p>{event.description}</p>
            
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