import React from "react";
import axios from "axios";
import { Card, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import aboutImg1 from '../../assets/img/office-image.jpg'
import businessman1 from '../../assets/img/businessman1.jpg'
import businessman2 from '../../assets/img/businessman2.jpg'
import businessman3 from '../../assets/img/businessman3.jpg'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


const accessToken = process.env.REACT_APP_MAPBOX_KEY;

class AboutView extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Jumbotron fluid style={{ height: "50vh", backgroundPosition: "bottom" }} className="p-0">
                    <div className="jumbotron-overlay">
                        <div className="container text-center jumbotron-content">
                            <h1 className="display-4 font-weight-bold">
                                About Talis
                            </h1>
                        </div>
                    </div>
                </Jumbotron>
                <Container className="py-5">
                    <Row>
                        <Col md={6}>
                            <Image src={aboutImg1} className="card-img rounded-0" alt="..." />
                        </Col>
                        <Col md={6}>
                            <h1>Talis</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum dolor massa. Etiam scelerisque luctus nisl ut dignissim. Donec elementum, urna sit amet ullamcorper viverra, tortor justo pellentesque orci, ac consectetur augue orci et risus. In nulla augue, laoreet vulputate arcu id, consequat volutpat tortor. Phasellus accumsan magna non commodo cursus. Aenean condimentum pretium augue. Nullam eget tincidunt lectus. In porttitor bibendum neque, eu auctor dolor tincidunt ut. Donec lacinia suscipit luctus. Vivamus at ligula et nunc scelerisque ultricies. Cras mattis, neque vel venenatis finibus, enim erat convallis massa, a dapibus mauris elit nec tortor. Vestibulum ultrices vitae enim vel mattis. Sed dignissim congue eros et fermentum. Nam lacinia ex enim, sit amet varius lectus pretium vitae. Cras imperdiet nunc in diam volutpat iaculis.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="section">
                    <Container className="py-5">
                        <h2>Talis Leadership</h2>
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <Card.Img style={{ height: "475px" }} variant="top" src={businessman1} />
                                    <Card.Footer>
                                        <h4>Michael Smith</h4>
                                        <h6>Chief Executive Officer</h6>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img style={{ height: "475px" }} variant="top" src={businessman2} />
                                    <Card.Footer>
                                        <h4>Shawn Thompson</h4>
                                        <h6>Chief Financial Officer</h6>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img style={{ height: "475px" }} variant="top" src={businessman3} />
                                    <Card.Footer>
                                        <h4>Darrel Williams</h4>
                                        <h6>Vice President of Marketing</h6>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="py-5">
                    <Row>
                        <Col md={6}>
                            <Map center={[5.559907, -0.204809]} zoom={16} scrollWheelZoom={false} style={{ height: "400px" }}>
                                <TileLayer
                                    url={`https://api.mapbox.com/styles/v1/mxnunley1/ck9969yit0kpl1jnrnvr4511e/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`}
                                    attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                                />
                            </Map>
                        </Col>
                        <Col md={6}>
                            <h1>Talis Office</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum dolor massa. Etiam scelerisque luctus nisl ut dignissim. Donec elementum, urna sit amet ullamcorper viverra, tortor justo pellentesque orci, ac consectetur augue orci et risus. In nulla augue, laoreet vulputate arcu id, consequat volutpat tortor. Phasellus accumsan magna non commodo cursus. Aenean condimentum pretium augue. Nullam eget tincidunt lectus. </p>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div >
        );
    }
}

export default AboutView;