import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import TalisLogo from '../../assets/img/navbar-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Layout = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="none" className="navbar">
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

            <Container fluid className="p-0">
                <div className="site-layout-content">{props.children}</div>
            </Container>

            <footer className="footer">
                <Container className="text-white py-5">
                    <div className="row">
                        <div className="col-lg-5 col-xs-12 about-company">
                            <a className="navbar-brand" href="{% url 'index' %}">
                                <img src={TalisLogo} alt="Talis Logo" />
                            </a>
                            <p className="pr-5 font-weight-light">
                                Transparent, honest, and sincere property management services for
                                residential and commercial properties
                        </p>
                            <p>
                                <a href="#"><FontAwesomeIcon icon={faFacebookSquare} className="mr-1" /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-square" /></a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3">Neighborhoods</h4>
                            <ul className="m-0 p-0 font-weight-light">
                                <li>- <a href="#">Airport</a></li>
                                <li>- <a href="#">Cantonments</a></li>
                                <li>- <a href="#">Dzorwulu</a></li>
                                <li>- <a href="#">East Legon</a></li>
                                <li>- <a href="#">Labone</a></li>
                                <li>- <a href="#">Roman Ridge</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-xs-12 location">
                            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                            <p className="mb-0 font-weight-light">8 Sir Arku Korsah Rd</p>
                            <p className="font-weight-light">Airport, Accra, Ghana</p>

                            <p className="mb-0"><FontAwesomeIcon icon={faPhone} className="mr-3" />+233 302 798 692</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="mr-3" />info@talispropertyservices.com</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col copyright">
                            <small>
                                <p className="">
                                    Copyright &copy; <span className="year"></span> TALIS Property Services
                            </p>
                            </small>
                        </div>
                    </div>
                </Container>
            </footer>

        </div >
    );
};

export default Layout;
