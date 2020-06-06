import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {  Button, CardDeck, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import "../App.css";


class AdminEventList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            success: false,
            
            
            
        };
        this.toggleModal = this.toggleModal.bind(this);
        
    }

    toggleModal(){
        this.setState({ isModalOpen: !this.state.isModalOpen});
    }


    onDeleteClick(eventid){
        
        
        axios
            .delete("http://localhost:8082/admin/dashboard/"+eventid)
            .then(res => {
                console.log("successful");
                this.setState({
                    success: true
                })
            }) 
            .catch(err => {
                console.log("Error from delete event");
            })  
    }

    render(){
    if(this.state.success){
        return <Redirect to={
            {
                pathname: "/dashboard"

            }
        }/>
    }
    const event = this.props.event;
    console.log(event._id);
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
            <div class="card-footer  w-100 text-muted">
                Event Entry Fee : {event.eventfee}$

                
                <Link to={`/event/dashboard/${event._id}`}>
                    <Button className="click" color="success"  ><i class="fa fa-info" aria-hidden="true" style={{marginRight: '7px'}} ></i>More Details...</Button>
                </Link>
                <Button className="click" color="danger" onClick={this.toggleModal}  ><i class="fa fa-trash" aria-hidden="true" style={{marginRight: '7px'}} ></i>DeleteEvent</Button>
                <Link to={`/event/dashboard/${event._id}/update`}>
                    <Button className="click" color="warning" ><i class="fa fa-edit" aria-hidden="true" style={{marginRight: '7px'}} ></i>UpdateEvent</Button>
                </Link>
            </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
                Alert
            </ModalHeader>
            <ModalBody>
                <p>Are you sure you want to delete.. ?</p>
                
                <Button className="click" color="danger" onClick={this.onDeleteClick.bind(this,event._id)}>
                    Delete
                </Button>
                
            </ModalBody>
        </Modal>
    </div>
    
    );
    }
}

export default AdminEventList;