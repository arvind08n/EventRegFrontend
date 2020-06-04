import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {  Button, CardDeck} from 'reactstrap';
import { Card, Table } from 'react-bootstrap';
import "../App.css";

const UserCard = (props) => {

    
    const count = 0;
    const user = props.user;
    return(
            //         <div class="card car">
            //             <div class="row no-gutters">
            //                 <div class="col">
            //                     <div class="card-block px-2">
            //                         <h4 class="card-title">{user.uniqueid}</h4>
            //                         <p class="card-text">{user.fullname}</p>
                                    
            //                     </div>
            //                 </div>
            //             </div>
            //   </div>
            <Table striped bordered hover variant="dark" responsive>
                <tbody>
                    <tr>
                    <td>{user.uniqueid}</td>
                    <td>{user.fullname}</td>
                    </tr>
                </tbody>
                </Table>
    
    );
    }


export default UserCard;