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
                            <img src="data:image/png;base64,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" height="40" width="41" alt="By order of the PB" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline className="bg">
                                        <Link to={`/`}>
                                        <i className="fa fa-sign-out"></i>Logout
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

