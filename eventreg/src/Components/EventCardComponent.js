import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
import {Card, CardDeck} from 'react-bootstrap';
import Moment from 'react-moment';

class EventCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: ''
        }
    }
    render(){
    const event = this.props.event;
    
    
    const last = new Date(event.lastdate).getTime();
   
    
    
    
    console.log(last);
    const currentDate = Date.now();
    console.log(currentDate);
    if(currentDate > last){
        return(
            <CardDeck>
            
            

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={event.imageUrl} />
                <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                        <Moment format="YYYY/MM/DD">
                            {event.lastdate}
                        </Moment>
                </Card.Text>
                <Button variant="primary" size="lg" outline="none" block disabled>Event Ended</Button>
                </Card.Body>
                </Card>
            </CardDeck>
        );
    }
    else{
        return(
            <CardDeck>
                

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={event.imageUrl} />
                <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                        <Moment format="YYYY/MM/DD">
                            {event.lastdate}
                        </Moment>
                </Card.Text>
                <Link to={`/${event._id}`}>
                    <Button color="primary" size="lg" block outline="none">Register</Button>
                </Link>
                </Card.Body>
            </Card>
            </CardDeck>
        );
    }
    }
}

export default EventCard;