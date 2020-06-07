import React,{Component} from 'react';
import {  Button, CardDeck, Modal, ModalBody, ModalHeader, Jumbotron} from 'reactstrap';
import { Card, Table } from 'react-bootstrap';
import "../App.css";
import Header from './HeaderComponent';


const Jumbo = () => {
    return(
        <Jumbotron className="jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-12">    
                        <h1>Update the Info</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}


class TypeList extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }

        this.toggleModal =  this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    

    render(){

    const count = 0;
    const user = this.props.type;
    return(
            <div>
            
            <Header />
            <Table striped bordered hover variant="dark" responsive>
                <tbody>
                    <tr>
                    <td align="left">{user.uniqueid}</td>
                    <td align="center">{user.fullname}</td>
                    <td align="right"><Button color="danger" outline="none" onClick={this.toggleModal} >Click to view full details ...</Button></td>
                    </tr>
                </tbody>
            </Table>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>User Details</ModalHeader>
                <ModalBody>
                    
                    <h3>Registration Id: {user.uniqueid}</h3>
                    <h3>Full Name      : {user.fullname}</h3>
                    <h3>Mobile         : {user.mobile}</h3>
                    <h3>Email          : {user.email}</h3>
                    <h3>Type           : {user.type}</h3>
                    <h3>NoOfSeats      : {user.noofticket}</h3>
                    
                </ModalBody>

            </Modal> 
            </div>
    );
    }
}


export default TypeList;