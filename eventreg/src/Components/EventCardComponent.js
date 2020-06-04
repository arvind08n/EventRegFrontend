import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
import {Card, CardDeck} from 'react-bootstrap';


const EventCard = (props) => {
    const event = props.event;
    console.log(event.imageUrl);
    const ndate = event.lastdate;
    ndate.substring(0, 10);
    return(
        <CardDeck>
        <Card className="card">
            <Card.Img src={event.imageUrl}></Card.Img>
            <Card.Body>
            <Card.Title className="text">
                
                    {event.name}
            
            </Card.Title>
            
            <Card.Text>{event.lastdate}</Card.Text>
            <Link to={`/${event._id}`}>
                <Button color="primary" size="lg" block outline="none">Register</Button>
            </Link>
            </Card.Body>
        </Card>
        </CardDeck>
    )
}

export default EventCard;