import React, {Component} from 'react';
import axios from 'axios';
import "../App.css";
import {  Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class UpdateEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventId: this.props.match.params.eventId,
            image: '',
            name: '',
            description: '',
            lastdate: '',
            eventfee: '',
            success: false
        };
        this.imageonChange = this.imageonChange.bind(this);
    }

    componentDidMount(){
        axios
            .get('http://localhost:8082/admin/dashboard/'+this.state.eventId+'/eventreg')
            .then(res => {
                this.setState({
                    name: res.data.name,
                    description: res.data.description,
                    lastdate: res.data.lastdate,
                    eventfee: res.data.eventfee
                })
            })
            .catch(err => {
                console.log('Error from update');
            })
    };

    imageonChange(event){
        this.setState({
            image : event.target.files[0]
        });
    }


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        axios.defaults.withCredentials = true;
        axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}`,'Content-Type': 'multipart/form-data'}


        let form = new FormData();
        form.set("name",this.state.name);
        form.set("description",this.state.description);
        form.set("lastdate",this.state.lastdate);
        form.set("eventfee",this.state.eventfee)
        form.append("image",this.state.image);
        

        axios
            .put('http://localhost:8082/admin/dashboard/'+this.state.eventId+'/update',form,{headers: {"Content-type": "multipart/form-data"}})
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
                <div className="container">
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
                </div>
        );
    }
}

export default UpdateEvent;