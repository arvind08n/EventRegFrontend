import React, { Component } from 'react';
import { Jumbotron, Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import axios  from 'axios';
import "../App.css"


class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            image: '',
            name: '',
            description: '',
            lastdate: '',
            eventfee: ''
        };
        
        this.toggleModal = this.toggleModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.imageonChange = this.imageonChange.bind(this);
    
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    imageonChange(event){
        this.setState({
            image : event.target.files[0]
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        this.toggleModal();
        e.preventDefault();
        
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}`,'Content-Type': 'multipart/form-data'}

        const data = {
            image : this.state.image,
            name: this.state.name,
            description: this.state.description,
            lastdate: this.state.lastdate,
            eventfee: this.state.eventfee 
        };

        let form = new FormData();
        form.set("name",this.state.name);
        form.set("description",this.state.description);
        form.set("lastdate",this.state.lastdate);
        form.set("eventfee",this.state.eventfee)
        form.append("image",this.state.image);
        

        axios.post('http://localhost:8082/admin/dashboard/createEvent', form,{headers: {"Content-type": "multipart/form-data"}})
            .then(res => {
                this.setState({
                    image: '',
                    name: '',
                    description: '',
                    lastdate: '',
                    eventfee: ''
                })
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                console.log("Error in createEvent");
            })
    };

    render(){
        return(
            <div>
                <Jumbotron>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <h1>Welcome Back Admin..!!</h1>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Button color="primary" size="lg" block onClick={this.toggleModal}>Create an event</Button>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Create an Event</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                        <FormGroup>
                            <Label for="image">Event Poster</Label>
                            <Input type="file" name="image" id="image" placeholder="Enter image url"  onChange={this.imageonChange} />
                            
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">
                                Event Name:
                            </Label>
                            <Input type="text" name="name" id="name" placeholder="Enter event name" value={this.state.name} onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input type="textarea" name="description" value={this.state.description} onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastdate">Last Date</Label>
                            <Input type="date" name="lastdate" value={this.state.lastdate} onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="eventfee">Event Fee</Label>
                            <Input type="eventfee" name="eventfee" value={this.state.eventfee} onChange={this.onChange} />
                        </FormGroup>
                        <Button type="submit" color="danger" value="submit">Submit</Button>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}


export default Dashboard;