import React, { Component } from 'react';
import { Jumbotron, FormGroup, Form, FormText, Label, Input, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../App.css';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from "axios";
import { Redirect } from 'react-router-dom';




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
            authenticate: false,
            userId: null,
            usertoken: null
        };
        
        
        this.handleSubmit=this.handleSubmit.bind(this)
        axios.defaults.withCredentials= true;
        
    }

    handleSubmit(event) {
        
        event.preventDefault();
        axios.post("http://localhost:8082/user/signup", { fullname: this.fullname.value, username: this.username.value, password: this.password.value, dob: this.dob.value, email: this.email.value, mobile: this.mobile.value })
            .then((res) => {
                if(res.data.success){
                    console.log(res);
                    this.setState({
                        authenticate: true,
                        userId: res.data.userId,
                        usertoken: res.data.token
                    });
                    localStorage.setItem("usertoken", res.data.token);
                    localStorage.setItem("userId", res.data.userId);
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
            
            <div>
                <Jumbo />
            <div className="container">
                <AvForm onSubmit={this.handleSubmit}>
                    <h1>Registration</h1>
                    <AvField name="fullname" id="fullname" label="Full Name" type="text" errorMessage="Invalid" innerRef={(input) => this.fullname = input} validate={{
                        required: {value: true},
                        minLength: {value: 4},
                        maxLength: {value: 16}
                    }} />
                    
                     <br/>
                     
                     <AvField name="username" id="username" label="Username" type="text" errorMessage="Username must be greater than 3 and less than 16" innerRef={(input) => this.username = input} validate={{
                         required: {value: true},
                         pattern: {value: '^[A-Za-z0-9]+$'},
                         minLength: {value: 4},
                         maxLength: {value: 16}
                     }} />

                     <AvField name="password" id="password" label="Password" type="password" errorMessage="Minimum 8 characters" innerRef={(input) => this.password = input} validate={{
                         required: true,
                         minLength: 8
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

                     
                     
                     <Button type="submit" value="submit" color="danger" size="btn-lg" block>Register</Button>
                </AvForm>
            </div>
            </div>
        )
    }
}

export default UserReg;