import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {  Button, CardDeck, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import "../App.css";


class AdminEventList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({ isModalOpen: !this.state.isModalOpen});
    }


    onDeleteClick(id){
        this.toggleModal();
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
        <div>
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

                <Button className="click" color="danger" onClick={this.toggleModal}  >DeleteEvent</Button>
                <Link to={`/event/dashboard/${event._id}`}>
                    <Button className="click" color="success"  >Click Here ..!</Button>
                </Link>
                
            </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
                Alert
            </ModalHeader>
            <ModalBody>
                <p>Are you sure you want to delete.. ?</p>
                <Button className="click" color="danger" onClick={this.onDeleteClick.bind(this, event._id)}>
                    Delete
                </Button>
            </ModalBody>
        </Modal>
    </div>
    
    );
    }
}

export default AdminEventList;