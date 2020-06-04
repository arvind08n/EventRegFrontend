import React from 'react';
import { Link } from 'react-router-dom';
import { Card , CardBody, CardTitle,CardImg, CardText, CardFooter, Button} from 'reactstrap';

const EventCard = (props) => {
    const event = props.event;
    console.log(event.imageUrl);
    const ndate = event.lastdate;
    ndate.substring(0, 10);
    return(
        <Card>
            <CardImg src={event.imageUrl}></CardImg>
            <CardTitle className="text">
                
                    {event.name}
            
            </CardTitle>
            
            <CardFooter>{ndate}</CardFooter>
            <Link to={`/${event._id}`}>
                <Button color="primary" size="lg" block outline="none">Register</Button>
            </Link>
        </Card>
    
    )
}

export default EventCard;