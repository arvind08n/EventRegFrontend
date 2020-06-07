import React, {Component} from 'react';
import axios from 'axios';
import "../App.css";
import {  Form, FormGroup, Label, Input, Button, Jumbotron} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

const Jumbo = () => {
    return(
        <Jumbotron className="jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-12">    
                        <h1>Update the Info</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}


class UpdateEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventId: this.props.match.params.eventId,
            name: '',
            description: '',
            lastdate: '',
            eventfee: '',
            success: false
        };
        
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        axios
            .get('http://stackhcker.herokuapp.com/admin/dashboard/'+this.state.eventId+'/eventreg')
            .then(res => {
                this.setState({

                    name: res.data.name,
                    description: res.data.description,
                    lastdate: res.data.lastdate,
                    eventfee: res.data.eventfee
                })
            })
            .catch(err => {
                console.log(this.state.eventId);
                console.log('Error from update');
            })
    };



    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();



        const data = {
            name: this.state.name,
            description: this.state.description,
            lastdate: this.state.lastdate,
            eventfee: this.state.eventfee
        }
        

        axios
            .put(' https://stackhcker.herokuapp.com/admin/dashboard/'+this.state.eventId+'/update',data)
            .then(res => {
                this.setState({
                    success: true
                })
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                console.log("Error in update event");
            })
    };

    render(){
        if(this.state.success)
        {
            return <Redirect to={
                {
                    pathname: "/dashboard"
    
                }
            }/>   
        }
        return(
            <div>
                <Header />
                <Jumbo />
                <div className="container">
                    <div className="mar">
                    <Form onSubmit = {this.onSubmit}>
                        
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
                        <Button type="submit" color="danger" btn-size="lg" block outline="none" value="submit"><i class="fa fa-edit" aria-hidden="true" style={{marginRight: '7px'}} ></i>Submit</Button>
                    </Form>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UpdateEvent;