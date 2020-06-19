import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import TalisLogo from '../../assets/img/navbar-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <Container className="text-white py-5">
                    <Row>
                        <Col xs={12} lg={5} className="about-company">
                            <a className="navbar-brand" href="{% url 'index' %}">
                                <img src={TalisLogo} alt="Talis Logo" />
                            </a>
                            <p className="pr-5 font-weight-light">
                                Transparent, honest, and sincere property management services for
                                residential and commercial properties
                            </p>
                            <p>
                                <a href="#home"><FontAwesomeIcon icon={faFacebookSquare} className="mr-1" /></a>
                                <a href="#home"><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-square" /></a>
                            </p>
                        </Col>
                        <Col xs={12} lg={3} className="links">
                            <h4 className="mt-lg-0 mt-sm-3">Neighborhoods</h4>
                            <ul className="m-0 p-0 font-weight-light">
                                <li>- <a href="#home">Airport</a></li>
                                <li>- <a href="#home">Cantonments</a></li>
                                <li>- <a href="#home">Dzorwulu</a></li>
                                <li>- <a href="#home">East Legon</a></li>
                                <li>- <a href="#home">Labone</a></li>
                                <li>- <a href="#home">Roman Ridge</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={4} className="location">
                            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                            <p className="mb-0 font-weight-light">8 Sir Arku Korsah Rd</p>
                            <p className="font-weight-light">Airport, Accra, Ghana</p>

                            <p className="mb-0"><FontAwesomeIcon icon={faPhone} className="mr-3" />+233 302 798 692</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="mr-3" />info@talispropertyservices.com</p>
                        </Col>
                    </Row>
                    <Row className="row mt-5">
                        <div className="col copyright">
                            <small>
                                <p className="">
                                    Copyright &copy; <span className="year"></span> TALIS Property Services
                            </p>
                            </small>
                        </div>
                    </Row>
                </Container>
            </footer>
        </div >
    );
};

export default Footer;
