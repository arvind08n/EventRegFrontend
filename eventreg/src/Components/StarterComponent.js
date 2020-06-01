import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Jumbotron, CardSubtitle, Button } from 'reactstrap';
import '../App.css';

const Jumbo = () => {
    return(
        <Jumbotron className="jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-12">
                        <h1>Welcome</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}

const StarterComponent = () => {
    
    return(
        <div>
            <Jumbo />
            <div className="container">
                
                <div className="row align-items-start">
                    <div className="col-12  col-md-5 m-auto">
                        <Card style={{width:"100%", height:"60%"}}>
                            <CardImg top  src="https://source.wustl.edu/wp-content/uploads/2017/06/shutterstock_403785310-760x474.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Hello,User!!</CardTitle>
                                <CardSubtitle>Hope we find you in best health </CardSubtitle>
                                <CardText>Click on the below button to book yourself a seat in ongoing events..</CardText>
                                <Button>Click me</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12  col-md-5 m-auto">
                        <Card style={{width:"100%", height:"60%"}}>
                            <CardImg top  src='https://www.bootstrapdash.com/wp-content/uploads/2017/10/How-to-Create-an-Admin-Panel-with-a-Bootstrap-Template.jpg' alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </div>
                    
                    
                </div>
            </div>
        </div>

        
    );
}

export default StarterComponent;