import React from 'react';
import { Link } from 'react-router-dom';
import { Card , CardBody, CardTitle,CardImg, CardText, CardFooter, Button} from 'reactstrap';

const EventCard = (props) => {
    const event = props.event;
    const ndate = event.lastdate;
    ndate.substring(0, 10);
    return(
        <Card>
            <CardImg src={event.imageUrl}></CardImg>
            <CardTitle className="text">
                
                    {event.name}
            
            </CardTitle>
            <CardText className="text">
                {event.description}
                
            </CardText>
            <CardFooter>{ndate}</CardFooter>
            <Link to={`/user/:userId/${event._id}`}>
                <Button color="primary" size="lg" block outline="none">Register</Button>
            </Link>
        </Card>
    
    )
}

export default EventCard;