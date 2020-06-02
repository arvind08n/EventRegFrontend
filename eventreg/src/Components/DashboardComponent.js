import React, { Component } from 'react';
import { Jumbotron, Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import axios  from 'axios';


class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            image: '',
            name: '',
            description: '',
            lastdate: ''
        };
        
        this.toggleModal = this.toggleModal.bind(this);
        
    
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        this.toggleModal();
        e.preventDefault();
        
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}`}

        const data = {
            image : this.state.image,
            name: this.state.name,
            description: this.state.description,
            lastdate: this.state.lastdate
        };

        axios.post('http://localhost:8082/admin/dashboard/createEvent', data)
            .then(res => {
                this.setState({
                    image: '',
                    name: '',
                    description: '',
                    lastdate: ''
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
                            <Input type="file" name="image" id="image" value={this.state.image} onChange={this.onChange} />
                            <FormText color="muted">
                            Input a suitable poster which describes your event precisely...
                            </FormText>
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
                        <Button type="submit" color="danger" value="submit">Submit</Button>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}


export default Dashboard;