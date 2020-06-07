import React, {Component} from 'react';
import {Jumbotron, Button, Modal, ModalBody, ModalHeader, Container } from 'reactstrap';
import axios from 'axios';
import {AvField, AvForm } from 'availity-reactstrap-validation';
import '../App.css';
import tick from '../assets/tick.png';
import { Link,Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


var timestamp = Date.now();

const Jumboo = () => {
    return(
        <Jumbotron className="jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-12">
                        <h1>Successfull</h1>
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
            date: new Date(),
            eventid: this.props.match.params.eventId,
            event: {},
            fullname: '',
            mobile: '',
            email: '',
            type: '',
            noofticket: '',
            image: null,
            isModalOpen: false ,
            uniqueid: '',
            disabled: false,
            success: false,
            random: 0
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        

    }

    handleSelect(){
        this.setState( {disabled: !this.state.disabled})
    }

    toggleModal(){
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
        
    }

    onSelect = e => {
        if(this.state.type === "self")
        {
            console.log("self");
            this.setState({ [e.target.name]: 1});
        }
        else{
            console.log("group");
            this.setState({ [e.target.name] : e.target.value});
        }
    }

    getMinutes(){
        return this.state.date.getMinutes();
    }

    handleChange(event){
        
        this.setState({
            image: URL.createObjectURL(event.target.files[0]),
        
        })
    }

    onSubmit = e => {
        e.preventDefault();
       
        
        const data = {
            uniqueid: timestamp,
            fullname: this.state.fullname,
            mobile: this.state.mobile,
            email: this.state.email,
            image: this.state.image,
            type: this.state.type,
            noofticket: this.state.noofticket
        };

        console.log(data.uniqueid);

        axios
            .post(' https://stackhcker.herokuapp.com/user/' + this.state.eventid + '/eventreg', data)
            .then(res => {
                this.setState({
                    uniqueid: true,
                    fullname : '',
                    mobile: '',
                    email: '',
                    image: null,
                    type: '',
                    noofticket: '',
                    success: true,
                    

                })

            })
            .catch(err => {
                console.log("Error in event reg");
            })

        console.log(data);
        
    }

    

    componentDidMount(){
        axios
            .get(' https://stackhcker.herokuapp.com/user/' + this.state.eventid + '/eventreg')
            .then(res => {
                this.setState({
                    event: res.data
                })
            })
            .catch(err => {
                console.log("Error from eventreg");
            })
        console.log(this.state.eventid);
        console.log(this.state.event);
   
    };

    


    render(){
        
        
        console.log(this.state.eventid);
        const event = this.state.event;
        const last = new Date(event.lastdate).getTime();
        const currentDate = Date.now();
        console.log(Date.now());
        console.log(event.lastdate);
        console.log(last);
        const Jumbo = () => {
            return(
                <Jumbotron className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-12">
                                <h1>{event.name}</h1>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            )
        }
            let EventItem = 
            <div>
                <Header />
            <Container>
            
            <img src={event.imageUrl} width="100%" height="100%" />    
            
            <div className="row">
                <div className="col-12 col-sm-6" className="text top">
                    <h4>Description
                    </h4>
                    <p>{event.description}</p>
                    <h4>Event Fee: {event.eventfee}</h4>
                    <h6>Scroll down to register....</h6>
                </div>
            </div>
            
            
        </Container>
        
        </div>
            
            
        

        

        if(this.state.success){
            return(
                <div>
                    <Jumboo />
                    <Header />
                    <div className="container">
                        <div className="tick">    
                            <h1>Registered Successfully !</h1>
                            <img width="100px" height="100px" src={tick}></img>
                            <h4>Registration ID: {timestamp}</h4>
                            <p>Note the registration id for future references..</p>
                            <Link to={`/`}>
                                <Button color="primary">Return to Home</Button>
                            </Link>
                        </div>    
                    </div>
                    

                </div>
            );
        }
        if(currentDate > last){
            return(
            <div></div>);
        }
        else{
            if(this.state.type === "Self"){
                return(
            
                    <div>
                        <Jumbo />
                        <div className="container">
                            {EventItem}
                            <h4 className="top">Registration Form:</h4>
                            <AvForm className="top" onSubmit={this.onSubmit}>
                                <AvField name="fullname" label="Full Name:" id="fullname" type="text" innerref={(input) => this.fullname = input  } value={this.state.fullname} onChange={this.onChange} validate={{
                            
                                }}></AvField>
                                <AvField name="mobile" id="mobile" label="Mobile No" type="text" innerRef={(input) => this.mobile = input} value={this.state.mobile} onChange={this.onChange} validate={{
                                        number: true
                                        
                                }} />
                                
                                
                                <AvField name="email" id="email" label="Email" type="email" errorMessage="required" innerRef={(input) => this.email = input} value={this.state.email} onChange={this.onChange} validate={{
                                        required: true 
                                    }} />
                                
                                <AvField name="image" id="image" label="ID CARD(png/jpeg)" type="file" innerRef={(input) => this.image = input} onChange={this.handleChange} validate={{required: true}} />
    
                                <AvField type="select" name="type" label="Reg Type:" helpMessage="Select the reg type.If self it is prepopulate to 1" value={this.state.type} onClick={this.handleSelect.bind(this)} onChange={this.onChange} validate={{required: true}}>
                                    <option>Choose</option>
                                    <option>Self</option>
                                    <option>Group</option>
                                    <option>Corporate</option>
                                    <option>Others</option>
                                    
                                </AvField>
                                                                                    
                                    <AvField name = "noofticket" type="text" label="No of Tickets" innerRef={(input) => this.noofticket = input} value={this.state.noofticket=1} disabled={(this.state.disabled) ? "1" : ""} onChange={this.onChange} validate={{
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
                        <Footer />
                    </div>
                );
            }
            else{
                return(
            
                    <div>
                        <Jumbo />
                        <div className="container">
                            {EventItem}
                            <h4 className="top">Registration Form:</h4>
                            <AvForm className="top" onSubmit={this.onSubmit}>
                                <AvField name="fullname" label="Full Name:" id="fullname" type="text" innerref={(input) => this.fullname = input  } value={this.state.fullname} onChange={this.onChange} validate={{
                            
                                }}></AvField>
                                <AvField name="mobile" id="mobile" label="Mobile No" type="text" innerRef={(input) => this.mobile = input} value={this.state.mobile} onChange={this.onChange} validate={{
                                        number: true
                                        
                                }} />
                                
                                
                                <AvField name="email" id="email" label="Email" type="email" errorMessage="required" innerRef={(input) => this.email = input} value={this.state.email} onChange={this.onChange} validate={{
                                        required: true 
                                    }} />
                                
                                <AvField name="image" id="image" label="ID CARD(png/jpeg)" type="file" innerRef={(input) => this.image = input} onChange={this.handleChange} validate={{required: true}} />
    
                                <AvField type="select" name="type" label="Reg Type:" helpMessage="Select the reg type.If self it is prepopulate to 1" value={this.state.type} onChange={this.onChange} validate={{required: true}}>
                                    <option>Choose</option>
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
                        <Footer />
                    </div>
                );
            }
            
        }
    }
}

export default EventReg;
