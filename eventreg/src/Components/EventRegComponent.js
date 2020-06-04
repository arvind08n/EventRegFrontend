import React, {Component} from 'react';
import {Jumbotron } from 'reactstrap';
import axios from 'axios';
import EventList from './EventListComponent';



class EventReg extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventId: this.props.match.params.eventId,
            event: {}
        };
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
        const jumboStyle = {
            color: 'blue',
            backgroundImage: 'url(' + event.imageUrl + ')' ,
        };
        console.log(event);
        let EventItem = <div >
            <Jumbotron className="jumbotron" style={jumboStyle}>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-12">
                        <h1>Welcome</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </Jumbotron>
            
        </div>
        return(
            <div>
                
                <div className="container">
                    {EventItem}
                </div>
            </div>
        );
    }
}

export default EventReg;