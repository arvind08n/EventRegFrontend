import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle,Jumbotron, CardSubtitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import '../App.css';
import axios from "axios";
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
            isModalOpen: false,
        
            authenticated: false,
            token: null,
            
            

        };
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        axios.defaults.withCredentials = true;
    }

    toggleModal(){
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    

    

    handleLogin(evt)
    {
        this.toggleModal();
        console.log(evt);
        console.log(this.username.value);
        evt.preventDefault();
        axios.post("http://localhost:8082/admin/login", { username: this.username.value, password:this.password.value })
            .then((res) => {
                if(res.data.success) {
                    console.log(res);
                    this.setState({
                        authenticated: true,
                        token: res.data.token
                    })
                    localStorage.setItem("token",res.data.token);
                }
            })
            .catch((err) => console.log(err));   
        
    }
    render(){
        
        if(this.state.authenticated){
            return <Redirect to={
                {
                    pathname: "/Dashboard",
                    
                }
            }/>
        }
        else{
            return(
                
                <div className="bg">
                    
                    <Jumbo />
                    <div className="container pos">
                        
                        <div className="row align-items-start align">
                            <div className="col-12  col-md m-1 starter">
                                <Card className="cardAlign">
                                    <CardImg top  src="https://source.wustl.edu/wp-content/uploads/2017/06/shutterstock_403785310-760x474.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="align">User</CardTitle>
                                        <CardSubtitle>Welcome User !!</CardSubtitle>
                                        <CardText>Click on the below button to enter..</CardText>
                                        <Link to={`/register-user`}>
                                            <Button color="danger">Click me</Button>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12  col-md m-1 starter">
                                <Card className="cardAlign">
                                    <CardImg top  src={img} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Admin</CardTitle>
                                        <CardSubtitle>Welcome back Admin !!!</CardSubtitle>
                                        <CardText>Click on the below button to login..</CardText>
                                        <Button color="danger" onClick={this.toggleModal}>Login</Button>
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
}


export default StarterComponent;