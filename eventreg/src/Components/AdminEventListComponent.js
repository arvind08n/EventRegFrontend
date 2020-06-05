import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {  Button, CardDeck} from 'reactstrap';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import "../App.css";


class AdminEventList extends Component{
    
    constructor(props){
        super(props);
    }

    onDeleteClick(id){
        axios
            .delete('http://localhost:8082/admin/dashboard/' +id)
            .then(res => {
                this.props.history.push("/dashboard");
            }) 
            .catch(err => {
                console.log("Error from delete event");
            })  
    }

    render(){

    const event = this.props.event;
    return(
        <div class="card car">
            <div class="row no-gutters">
                <div class="col-auto">
                    <img src={event.imageUrl} width="410px" height="410px" class="img-fluid" alt=""/>
                </div>
                <div class="col">
                    <div class="card-block px-2">
                        <h4 class="card-title">{event.name}</h4>
                        <p class="card-text">{event.description}</p>
                        
                    </div>
                </div>
            </div>
            <div class="card-footer w-100 text-muted">
                Event Entry Fee : {event.eventfee}$

                <Link to={`/event/dashboard/${event._id}`}>
                    <Button className="click" color="danger" >Click Here ..!</Button>
                </Link>
                
        </div>
  </div>
    
    );
    }
}

export default AdminEventList;