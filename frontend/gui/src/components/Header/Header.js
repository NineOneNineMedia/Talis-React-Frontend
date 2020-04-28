import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import TalisLogo from '../../assets/img/navbar-logo.svg'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="none" fixed="top">
                <Container fluid className="p-0">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" navbar-toggler" />
                    <Navbar.Brand href="#home" className="mx-auto text-black-75"><img src={TalisLogo} alt="Talis Logo" /></Navbar.Brand>
                </Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-white">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        <Nav.Link href="/listings">AVAILABLE LISTINGS</Nav.Link>
                        <Nav.Link href="/dashboard">Welcome (USER) (DASHBOARD)</Nav.Link>
                        <Nav.Link>Login/Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;
