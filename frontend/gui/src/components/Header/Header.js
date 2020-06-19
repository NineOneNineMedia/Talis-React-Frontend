import React from "react";
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import TalisLogo from '../../assets/img/navbar-logo.svg'


const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [defaultActionKey, setDefaultActionKey] = React.useState("");
    return (
        <div>
            <Navbar collapseOnSelect expand="md" fixed="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" />
                <Navbar.Brand href="/" className="mr-auto text-black-75 pl-2 pl-md-0"><img src={TalisLogo} alt="Talis Logo" /></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto text-white">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        <Nav.Link href="/listings">AVAILABLE LISTINGS</Nav.Link>
                        <Nav.Link href="/myTalis/profile">myTalis</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-white">
                        <Nav.Link href="/register/">Register</Nav.Link>
                        <Nav.Link href="/login/">Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;
