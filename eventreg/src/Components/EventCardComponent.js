import React from 'react';
import { Link } from 'react-router-dom';
import { Card , CardBody, CardTitle,CardImg, CardText, CardFooter, Button} from 'reactstrap';

const EventCard = (props) => {
    const event = props.event;
    const ndate = event.lastdate;
    ndate.substring(0, 10);
    return(
        <Card>
            <CardImg src={'data:image/png;base64,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'}></CardImg>
            <CardTitle className="text">
                
                    {event.name}
            
            </CardTitle>
            <CardText className="text">
                {event.description}
                
            </CardText>
            <CardFooter>{ndate}</CardFooter>
            <Link to={`/dashboard`}>
                <Button color="primary" size="lg" block outline="none">Register</Button>
            </Link>
        </Card>
    
    )
}

export default EventCard;