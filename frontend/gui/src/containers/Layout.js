import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, FormControl, Button, Container } from 'react-bootstrap';

const Layout = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="none" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mr-auto navbar-toggler" />
                    <Navbar.Brand href="#home" className="mx-auto text-black-75">React-Bootstrap</Navbar.Brand>
                </Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-white">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Available Listings</Nav.Link>
                        <Nav.Link href="#pricing">Welcome (USER) (DASHBOARD)</Nav.Link>
                        <Nav.Link href="#pricing">Login/Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container text style={{ padding: "3em 0" }}>
                <div className="site-layout-content">{props.children}</div>
            </Container>

            <footer className="footer">
                <Container className="text-white py-5">
                    <div className="row">
                        <div class="col-lg-5 col-xs-12 about-company">
                            <a class="navbar-brand" href="{% url 'index' %}">
                            </a>
                            <p class="pr-5 font-weight-light">
                                Transparent, honest, and sincere property management services for
                                residential and commercial properties
                        </p>
                            <p>
                                <a href="#"><i class="fab fa-facebook-square mr-1"></i></a><a href="#"><i
                                    class="fab fa-linkedin-square"></i></a>
                            </p>
                        </div>
                        <div class="col-lg-3 col-xs-12 links">
                            <h4 class="mt-lg-0 mt-sm-3">Neighborhoods</h4>
                            <ul class="m-0 p-0 font-weight-light">
                                <li>- <a href="#">Airport</a></li>
                                <li>- <a href="#">Cantonments</a></li>
                                <li>- <a href="#">Dzorwulu</a></li>
                                <li>- <a href="#">East Legon</a></li>
                                <li>- <a href="#">Labone</a></li>
                                <li>- <a href="#">Roman Ridge</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-xs-12 location">
                            <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                            <p class="mb-0 font-weight-light">8 Sir Arku Korsah Rd</p>
                            <p class="font-weight-light">Airport, Accra, Ghana</p>

                            <p class="mb-0"><i class="fa fa-phone mr-3"></i>+233 302 798 692</p>
                            <p><i class="fa fa-envelope mr-3"></i>info@talispropertyservices.com</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col copyright">
                            <small>
                                <p class="">
                                    Copyright &copy; <span class="year"></span> TALIS Property Services
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
