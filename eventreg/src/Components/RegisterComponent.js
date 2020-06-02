import React, { Component } from 'react';
import { Jumbotron, FormGroup, Form, FormText, Label, Input, Button } from 'reactstrap';
import '../App.css'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


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
            fullName: "",
            userId: "",
            password: "",
            gender: "",
            dob: "",
            mobileNo: ""
        }

        this.handleSubmit=this.handleSubmit.bind(this)
    }

    namehandler = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }

    idhandler = (event) => {
        this.setState({
            userId: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }   

    dobhandler = (event) => {
        this.setState({
            dob: event.target.value
        })
    }   

    mobilehandler = (event) => {
        this.setState({
            mobileNo: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            fullName: "",
            userId: "",
            password: "",
            gender: "",
            dob: "",
            mobileNo: ""           
        })
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <Jumbo />
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <h1>Registration</h1>
                    <FormGroup>
                        <Label>Full Name : </Label>
                        <Input type="text" value={this.state.fullName} onChange={this.namehandler}/>
                    </FormGroup>
                     <br/>
                     <FormGroup>
                        <Label>User Name : </Label>
                        <Input type="text" value={this.state.userId} onChange={this.idhandler}/><br/>
                     </FormGroup>
                     
                     <FormGroup>
                        <Label>Password : </Label>
                        <Input type="password" value={this.state.password} onChange={this.passwordhandler}/><br/>
                     </FormGroup>

                     <FormGroup>
                        <Label>DOB : </Label>
                        <Input type="date" value={this.state.dob} onChange={this.dobhandler}/><br/> 
                     </FormGroup>
                     <FormGroup>
                         <Label>Email : </Label>
                         <Input type="email" />
                     </FormGroup>
                     <FormGroup>
                        <Label>Mobile no. : </Label>
                        <Input type="text" value={this.state.mobileNo} onChange={this.mobilehandler}/><br/>
                     </FormGroup>
                     
                     <Button type="submit" value="submit" color="primary" size="btn-lg" block>Register</Button>
                </Form>
            </div>
            </div>
        )
    }
}

export default UserReg;