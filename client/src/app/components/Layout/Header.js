import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="info" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Rolling New</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Actualidad</Nav.Link>
                        <Nav.Link href="#link">Politica</Nav.Link>
                        <Nav.Link href="#link">Deportes</Nav.Link>
                        <Nav.Link href="#link">Salud</Nav.Link>
                        <Nav.Link href="#link">Tecnologia</Nav.Link>
                        <Nav.Link href="#link">Espectaculo</Nav.Link>
                        <Dropdown className="ml-auto">
                            <NavDropdown
                                title="Mi Cuenta"
                                id="basic-nav-dropdown"
                                className="rn-nav-link"
                            >
                                <NavDropdown.Item>Ingresar</NavDropdown.Item>
                                <NavDropdown.Item>Registrarse</NavDropdown.Item>
                            </NavDropdown>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;