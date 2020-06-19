import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Jumbotron, ListGroup, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract, faShieldAlt, faCar, faDumbbell, faWifi, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ListingGallery from "../../components/ListingGallery/ListingGallery";
import ListingContactCard from "../../components/ListingContactCard/ListingContactCard";


class DetailListingView extends React.Component {
    state = {
        listing: [],
    }

    componentDidMount() {
        const listingID = this.props.match.params.listingID;
        axios.get(`http://127.0.0.1:8000/api/listings/listing/${listingID}`).then((res) => {
            this.setState({
                listing: res.data,
            })
            console.log(res.data)
        });
    }

    render() {
        const data = this.state.listing
        const leaseData = data.lease_length
        const recreationData = data.fitness_recreation
        const featuresData = data.features
        const securityData = data.security
        const servicesData = data.service
        const parkingData = data.parking
        console.log(leaseData)
        console.log(recreationData)
        console.log(featuresData)
        console.log(securityData)
        console.log(servicesData)
        console.log(parkingData)
        return (
            <div>
                <Header />
                <Container className="py-2" style={{ marginTop: "4.5rem" }}>
                    <Row>
                        <Col xs={3} md={1} className="my-auto p-0">
                            <a id="back">
                                <Button className="rounded-0 text-primary">
                                    <i className="fas fa-arrow-left fa-2x"> </i>
                                </Button>
                            </a>
                        </Col>
                        <Col xs={9} md={6} className="text-center my-auto p-0">
                            <h4 className="m-0">{this.state.listing.title}</h4>
                            <h5 className="font-weight-light m-0">{this.state.listing.property_address}</h5>
                        </Col>
                        <Col md={4} className="d-none d-md-block text-center my-auto">
                            <h4>Developer Name</h4>
                        </Col>
                        <Col md={1} className="d-none d-md-block text-center my-auto p-0" id="favorite-section">
                            <a href="" className="text-primary">
                                <i className="fas fa-heart fa-3x"></i>
                            </a>
                            <a href="" className="text-primary">
                                <i className="far fa-heart fa-3x"></i>
                            </a>
                        </Col>
                    </Row>
                </Container>
                <Container className="listing-info d-none d-md-block py-2">
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xs={3} className="text-center px-0">
                            <h5 className="mb-0">1 Bedroom <span
                                className="font-weight-light">$500-$600</span>
                            </h5>
                        </Col>
                        <Col xs={3} className="text-center px-0">
                            <h5 className="mb-0">2 Bedroom <span
                                className="font-weight-light">$700-$800</span>
                            </h5>
                        </Col>
                        <Col xs={3} className="text-center px-0">
                            <h5 className="mb-0">3 Bedroom <span
                                className="font-weight-light">$900-$1000</span>
                            </h5>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={12} className="p-0 m-0">
                            {/* Photo Gallery */}
                            <ListingGallery />
                            {/* Description */}
                            <Row className="mb-5">
                                <Container>
                                    <Col className="col-md-8">
                                        <h3 className="mb-3">About Property Residences</h3>
                                        <p>
                                            {this.state.listing.description}
                                        </p>
                                    </Col>
                                </Container>
                            </Row>
                            {/* Features */}
                            <Row className="mb-5">
                                <Container>
                                    <Col className="col-md-8">
                                        <h3 className="mb-3">Amenities</h3>
                                        <Row>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end p-0 text-primary">
                                                        <FontAwesomeIcon icon={faFileContract} size="2x" className="mr-3" />
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Lease Opitions</h4>
                                                        <List data={leaseData} />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end p-0 text-primary">
                                                        <FontAwesomeIcon icon={faShieldAlt} size="2x" className="mr-3" />
                                                        <i className="fas fa-shield-alt fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Security</h4>
                                                        <List data={securityData} />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end text-primary p-0">
                                                        <FontAwesomeIcon icon={faCar} size="2x" className="mr-3" />
                                                        <i className="fas fa-car fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Parking</h4>
                                                        <List data={parkingData} />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end p-0 text-primary">
                                                        <FontAwesomeIcon icon={faConciergeBell} size="2x" className="mr-3" />
                                                        <i className="fas fa-concierge-bell fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Services</h4>
                                                        <List data={servicesData} />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className=" col-1 d-flex justify-content-end p-0 text-primary">
                                                        <FontAwesomeIcon icon={faWifi} size="2x" className="mr-3" />
                                                        <i className="fas fa-wifi fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Features</h4>
                                                        <List data={featuresData} />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end p-0 text-primary">
                                                        <FontAwesomeIcon icon={faDumbbell} size="2x" className="mr-3" />
                                                        <i className="fas fa-dumbbell fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Fitness & Recreation</h4>
                                                        <List data={recreationData} />
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Container>
                            </Row>
                        </Col>
                        <Col md={4} className="m-0">
                            {/* Contact Card */}
                            <ListingContactCard />
                        </Col>

                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default DetailListingView;

function List({ data }) {
    if (!data) {
        return null;
    } else if (data) {
        return (
            <ListGroup variant="flush">
                <ListGroup.Item>{data}</ListGroup.Item>
            </ListGroup>
        );
    } else {
        return (
            <ListGroup variant="flush">
                {data.map(item => (
                    <ListGroup.Item key={item.id}>{item}</ListGroup.Item>
                ))}
            </ListGroup>
        );
    }
}