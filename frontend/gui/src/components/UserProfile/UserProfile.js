import React from 'react';
import { Image, Container, Col, Row, Form, Card, Input } from 'react-bootstrap'



class UserProfile extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://picsum.photos/200" rounded />
                    </Col>
                    <Col md={8}>
                        <h3>Full Name</h3>
                        <h4>Profile Information</h4>
                        <hr />
                        <Row>
                            <Col>
                                <p>Username</p>
                            </Col>
                            <Col>
                                <p>Username</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Name</p>
                            </Col>
                            <Col>
                                <p>Name</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Email</p>
                            </Col>
                            <Col>
                                <p>Email</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Phone</p>
                            </Col>
                            <Col>
                                <p>Phone</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Location</p>
                            </Col>
                            <Col>
                                <p>Location</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserProfile;