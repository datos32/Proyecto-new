import React,{useEffect,useState,Fragment} from 'react';
import { FiUser,FiUserPlus } from "react-icons/fi";
import { BsFillCursorFill } from "react-icons/bs";
import {Form,Navbar,Nav,FormControl,Button,NavDropdown} from 'react-bootstrap';
import Newsletter from '../Layout/Header_Newsletter';
function Header(props){

  

    return(
        <Fragment>
        <Navbar collapseOnSelect expand="lg sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
            <Nav.Link className="font-4em" href="#features">Features</Nav.Link>
            <Nav.Link className="font-4em" href="#pricing">Pricing</Nav.Link>
            
            </Nav>
            <Nav className="ml-auto w" >
            <NavDropdown className="font-4em rn-nav-link m-r" title="MiCuenta" id="collasible-nav-dropdown">
                <NavDropdown.Item className="w" href="#action/3.1">Login <FiUser/></NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item className="w"  href="#action/3.2">Registro <FiUserPlus /></NavDropdown.Item>
            </NavDropdown>
            <Newsletter/>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Fragment>
    )
}

export default Header;