import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Jumbotron, CardSubtitle, Button } from 'reactstrap';
import '../App.css';
import img from '../assets/admin.png';

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
                        <Card className="cardAlign">
                            <CardImg top  src="https://source.wustl.edu/wp-content/uploads/2017/06/shutterstock_403785310-760x474.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>User</CardTitle>
                                <CardSubtitle>Welcome User !!</CardSubtitle>
                                <CardText>Click on the below button to enter..</CardText>
                                <Button>Click me</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12  col-md-5 m-auto">
                        <Card className="cardAlign">
                            <CardImg top  src={img} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Admin</CardTitle>
                                <CardSubtitle>Welcome back Admin !!!</CardSubtitle>
                                <CardText>Click on the below button to login..</CardText>
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