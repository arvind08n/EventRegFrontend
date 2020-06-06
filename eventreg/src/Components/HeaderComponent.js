import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../App.css";

export default class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

   

    render() {
        return (
            <React.Fragment >
                <Navbar fixed="top" dark pos expand="md">
                    
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="https://pbs.twimg.com/profile_images/1227930874114494465/ZikbSjNk_400x400.jpg" height="30" widtg="41" alt="Upskill by techzilla" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline className="bg">
                                        <Link to={`/`}>
                                        <span ><i className="fa fa-sign-out"></i>Logout</span>
                                        </Link>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    
                </Navbar>
                
            </React.Fragment>
        );
    }
}

