import React, { Component } from 'react';
import { Jumbotron, FormGroup, Form, FormText, Label, Input, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../App.css';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Footer from './FooterComponent';
import { Alert } from 'react-alert';



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

class UserReg extends Component{
    constructor(props){
        super(props);

        this.state={
            isModalRegister : false,
            authenticate: false,
            userId: null,
            token: null
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSignup=this.handleSignup.bind(this);
        axios.defaults.withCredentials= true;
        
    }

    toggleModal(){
        this.setState({
            isModalRegister: !this.state.isModalRegister
        });
    }

    handleSignup(event) {
        this.toggleModal();
        event.preventDefault();
        axios.post("http://localhost:8082/user/signup", { name: this.fullname.value, username: this.user.value, password: this.pass.value, dob: this.dob.value, email: this.email.value, mobile: this.mobile.value })
            .then((res) => {
                if(res.data.success){
                    console.log(res);
                    this.setState({
                        authenticate: true,
                        userId: res.data.userId,
                        token: res.data.token
                    });
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userId", res.data.userId);
                }
            })
            .catch((err) => console.log(err));
    }

    handleLogin(event){
        console.log(event);
        console.log(this.username.value);
        event.preventDefault();
        axios.post("http://localhost:8082/user/login", { username: this.username.value, password: this.password.value})
            .then((res)=> {
                if(res.data.success){
                    var red = "/" + res.data.userId + "/events";
                    console.log(res);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userId", res.data.userId);
                    this.setState({
                        authenticate: true,
                        userId: res.data.userId,
                        token: res.data.token
                    })
                }
            })
            .catch((err) => console.log(err));
    }

    

    render(){
        if(this.state.authenticate){
            console.log(this.state.userId);
            return <Redirect to={
                {
                    pathname: "/" + localStorage.getItem("userId") + "/events",

                }
            }/>
        }
        
        return(
            
            <div className="bg">
                <Jumbo />
            <div className="container">
                <h1>Login</h1>
                <AvForm onSubmit={this.handleLogin}>
                    <AvField name="username" id="username" label="Username" type="text" innerRef={(input)=> this.username=input }  />
                    <AvField name="password" id="password" label="Password" type="password" innerRef={(input)=> this.password=input }  />

                    <Button type="submit" value="submit" color="primary" size="btn-lg" block><i className="fa fa-sign-in " aria-hidden="true" style={{marginRight: '7px'}}></i>Login</Button>
                    
                    <p>New User .... </p>
                    

                </AvForm>
                <Button   onClick={this.toggleModal} color="danger" outline="none"><i className="fa fa-user-plus " aria-hidden="true" style={{marginRight: '7px'}}></i>Register</Button>

                
            </div>
            <Modal className="bg" isOpen={this.state.isModalRegister} toggle={this.toggleModal}>
                <ModalHeader className="head" toggle={this.toggleModal}>Register</ModalHeader>
                    <ModalBody>
                        <AvForm onSubmit={this.handleSignup}>
                            
                            <AvField name="fullname" id="fullname" label="Full Name" type="text" errorMessage="Invalid" innerRef={(input) => this.fullname = input} validate={{
                                required: {value: true},
                                minLength: {value: 4},
                                maxLength: {value: 16}
                            }} />
                            
                            <br/>
                            
                            <AvField name="user" id="user" label="Username" type="text" errorMessage="Username must be greater than 3 and less than 16" innerRef={(input) => this.user = input} validate={{
                                required: {value: true},
                                pattern: {value: '^[A-Za-z0-9]+$'},
                                minLength: {value: 4},
                                maxLength: {value: 16}
                            }} />

                            <AvField name="pass" id="pass" label="Password" type="password" errorMessage="Minimum 8 characters" innerRef={(input) => this.pass = input} validate={{
                                required: true
                                
                            }}/>
                            
                            <AvField name="dob" id="dob" label="DOB" type="date" errorMessage="Required" innerRef={(input) => this.dob = input} validate={{
                                required: true
                            }}/>
                            


                            <AvField name="email" id="email" label="Email" type="email" errorMessage="required" innerRef={(input) => this.email = input} validate={{
                                required: true 
                            }} />
                            
                            <AvField name="mobile" id="mobile" label="Mobile No" type="text" innerRef={(input) => this.mobile = input} validate={{
                                number: true,
                                required: true
                                }} />

                            
                            
                            <Button type="submit" value="submit" color="danger" size="btn-lg" block><i className="fa fa-user-plus " aria-hidden="true" style={{marginRight: '7px'}}></i>Register</Button>
                        </AvForm>
                    </ModalBody>
            </Modal>
            <Footer />
            </div>

        

        )
    }
}

export default UserReg;



