import React, { Component } from 'react';
import { Jumbotron, Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import { axios } from 'axios';


class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            image: '',
            name: '',
            description: '',
            lastdate: ''
        };
        
        this.toggleModal = this.toggleModal.bind(this);
    
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        this.toggleModal();
        e.preventDefault();

        const data = {
            image : this.state.image,
            name: this.state.name,
            description: this.state.description,
            lastdate: this.state.lastdate
        };

        axios
            .post('http://localhost:8082/admin/createEvent', data)
            .then(res => {
                this.setState({
                    image: '',
                    name: '',
                    description: '',
                    lastdate: ''
                })
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                console.log("Error in createEvent");
            })
    };

    render(){
        return(
            <div>
                <Jumbotron>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <h1>Welcome Back Admin..!!</h1>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Button color="primary" size="lg" block>Create an event</Button>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen}>
                    
                </Modal>
            </div>
        );
    }
}


export default Dashboard;