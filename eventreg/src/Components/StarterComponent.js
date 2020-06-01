import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Jumbotron, CardSubtitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
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

class  StarterComponent  extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            isModalOpen: false

        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal(){
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    handleLogin(evt)
    {
        this.toggleModal();
        evt.preventDefault();
    }
    render(){
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
                                    <Button onClick={this.toggleModal}>Login</Button>
                                </CardBody>
                            </Card>
                        </div>
                        
                        
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username" innerRef={(input) => this.username = input } />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password" innerRef={(input) => this.password = input } />
                                </FormGroup>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input } />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
            </div>

            
        );
    }
}

export default StarterComponent;