import React from 'react';
import { Link } from 'react-router-dom';
import { Card , CardBody, CardTitle,CardImg, CardText, CardFooter} from 'reactstrap';

const EventCard = (props) => {
    const event = props.event;

    return(
        <Card>
            <CardImg>{event.image}</CardImg>
            <CardTitle>
                <Link to={`/dashboard`} >
                    {event.name}
                </Link>
            </CardTitle>
            <CardText>
                {event.description}
                
            </CardText>
            <CardFooter>{event.lastdate}</CardFooter>
        </Card>
    
    )
}

export default EventCard;