import React, {Component} from 'react';
import {Jumbotron, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import axios from 'axios';
import {AvField, AvForm } from 'availity-reactstrap-validation';
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
            event: {},
            fullname: '',
            mobile: '',
            email: '',
            type: '',
            noofticket: '',
            image: null,
            isModalOpen: false 
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    toggleModal(){
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
        
    }

    handleChange(event){
        this.setState({
            image: URL.createObjectURL(event.target.files[0])
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.toggleModal();
        
        const data = {
            fullname: this.state.fullname,
            mobile: this.state.mobile,
            email: this.state.email,
            type: this.state.type,
            noofticket: this.state.noofticket
        };

        console.log(data);
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
                <div className="col-12 col-sm-6" className="text top">
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
                    <h4 className="top">Registration Form:</h4>
                    <AvForm className="top" onSubmit={this.onSubmit}>
                        <AvField name="fullname" label="Full Name:" id="fullname" type="text" innerref={(input) => this.fullname = input  } value={this.state.fullname} onChange={this.onChange} validate={{
                            required: true
                        }}></AvField>
                        <AvField name="mobile" id="mobile" label="Mobile No" type="text" innerRef={(input) => this.mobile = input} value={this.state.mobile} onChange={this.onChange} validate={{
                                number: true,
                                required: true
                        }} />
                        
                        
                        <AvField name="email" id="email" label="Email" type="email" errorMessage="required" innerRef={(input) => this.email = input} value={this.state.email} onChange={this.onChange} validate={{
                                required: true 
                            }} />
                        
                        <AvField name="image" id="image" label="ID CARD(png/jpeg)" type="file" innerRef={(input) => this.image = input} onChange={this.handleChange} validate={{required: true}} />

                        <AvField type="select" name="type" label="Reg Type:" helpMessage="Select the reg type.If self it is prepopulate to 1" value={this.type} onChange={this.onChange} validate={{required: true}}>
                            <option>Self</option>
                            <option>Group</option>
                            <option>Corporate</option>
                            <option>Others</option>
                            
                        </AvField>
                        <AvField name = "noofticket" type="text" label="No of Tickets" innerRef={(input) => this.noofticket = input} value={this.state.noofticket} onChange={this.onChange} validate={{
                            number: true,
                            required: true
                        }}/>

                        <Button type="submit" color="danger" outline="none" size="btn-bg" block>Register</Button>
                        
 
                    </AvForm>
                    <Button type="submit" value="Preview" onClick={this.toggleModal} className="topp" color="warning" outline="none" size="btn-lg" block>Preview</Button>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Preview</ModalHeader>
                        <ModalBody className="container">
                            <img src={this.state.image} className= "mini" />
                            <h4>Full Name:    {this.state.fullname}</h4>
                            <h6>Mobile No: {this.state.mobile}</h6>
                            <h6>Email: {this.state.email}</h6>
                            <h6>Reg Type: {this.state.type}</h6>
                            <h6>No of Tickets: {this.state.noofticket}</h6>

                        </ModalBody>
                    </Modal>

                    

                </div>
            </div>
        );
    }
}

export default EventReg;