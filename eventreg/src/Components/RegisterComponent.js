import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

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
                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>Full Name : </label> <input type="text" value={this.state.fullName} onChange={this.namehandler}/><br/>
                    <label>User Name : </label> <input type="text" value={this.state.userId} onChange={this.idhandler}/><br/>
                    <label>Password : </label> <input type="password" value={this.state.password} onChange={this.passwordhandler}/><br/>
                    <label>Gender : </label> 
                        <select onChange={this.genderhandler} defaultValue="Select Gender">
                            <option defaultValue>Select Gender</option>
                            <option value>Male</option>
                            <option value>Female</option>
                            <option value>Other</option>
                        </select><br/>
                    <label>DOB : </label> <input type="date" value={this.state.dob} onChange={this.dobhandler}/><br/>
                    <label>Mobile no. : </label> <input type="text" value={this.state.mobileNo} onChange={this.mobilehandler}/><br/>
                    <input type="submit" value="SUBMIT"/>
                </form>
            </div>
        )
    }
}

export default UserReg;