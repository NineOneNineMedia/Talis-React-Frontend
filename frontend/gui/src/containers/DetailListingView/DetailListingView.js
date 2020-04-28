import React from "react";
import axios from "axios";
import { Col, Container, Jumbotron, Row, Button } from 'react-bootstrap';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ListingGallery from "../../components/ListingGallery/ListingGallery";
import ListingContactCard from "../../components/ListingContactCard/ListingContactCard";

class DetailListingView extends React.Component {
    state = {
        listing: {},
    }

    componentDidMount() {
        const listingID = this.props.match.params.listingID;
        axios.get(`http://127.0.0.1:8000/api-listings/${listingID}`).then((res) => {
            this.setState({
                listing: res.data,
            })
            console.log(res.data)
        });
    }

    render() {
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
                            <h4 className="m-0">Title</h4>
                            <h5 className="font-weight-light m-0">Property Address</h5>
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
                        <Col md={8} className="p-0 m-0">
                            {/* Photo Gallery */}
                            <ListingGallery />
                            {/* Description */}
                            <Row className="mb-5">
                                <Container>
                                    <Col className="col-md-12">
                                        <h3 className="mb-3">About Property Residences</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tortor odio. Proin sagittis malesuada massa, rutrum tempus massa rutrum eu. Duis interdum orci in sagittis fermentum. Nullam nunc felis, rhoncus ac suscipit id, condimentum id neque. Morbi volutpat in nisl in consectetur. Maecenas a pulvinar erat, sit amet mollis nunc. Etiam commodo enim lacus, at varius sapien consectetur.
                                        </p>
                                    </Col>
                                </Container>
                            </Row>
                            {/* Features */}
                            <Row className="mb-5">
                                <Container>
                                    <Col className="col-md-12">
                                        <h3 className="mb-3">Amenities</h3>
                                        <Row>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end p-0 text-primary">
                                                        <i className="fas fa-file-contract fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Lease Opitions</h4>
                                                        <ul>
                                                            <li>choice</li>
                                                        </ul>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end p-0 text-primary">
                                                        <i className="fas fa-shield-alt fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Security</h4>
                                                        <ul>
                                                            <li>choice</li>
                                                        </ul>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end text-primary p-0">
                                                        <i className="fas fa-car fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Parking</h4>
                                                        <ul>
                                                            <li>choice</li>
                                                        </ul>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end p-0 text-primary">
                                                        <i className="fas fa-concierge-bell fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Services</h4>
                                                        <ul>
                                                            <li>choice</li>
                                                        </ul>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className=" col-1 d-flex justify-content-end p-0 text-primary">
                                                        <i className="fas fa-wifi fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Features</h4>
                                                        <ul>
                                                            <li>choice</li>
                                                        </ul>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <div className=" d-flex">
                                                    <Col className="col-1 d-flex justify-content-end p-0 text-primary">
                                                        <i className="fas fa-dumbbell fa-2x"></i>
                                                    </Col>
                                                    <Col className="col-11">
                                                        <h4>Fitness & Recreation</h4>
                                                        <ul>
                                                            <li>choice</li>
                                                        </ul>
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