import React from 'react';
import { Col, Row, Form, Card, Input, Nav, Tab, Tabs } from 'react-bootstrap'



class ListingContactCard extends React.Component {
    render() {
        return (
            <Row className="d-none d-md-block" id="contact-form">
                <Card>
                    <Card.Header className="border-0">
                        <Tabs fill defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Home">
                                <p>Visit</p>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                <p>Request</p>
                            </Tab>
                        </Tabs>
                    </Card.Header>
                    <Card.Title className="text-center w-100 mb-0 py-3 border-0 text-white">
                        <h2 className="mb-0">
                            <i className="fas fa-phone"></i> developer phone
                        </h2>
                    </Card.Title>
                    <Col className="col-12 color3 py-3">
                        <Form.Group className="form-group m-0">
                            <Form action="{% url 'contact' %}" method="POST">
                                <input type="hidden" name="user_id" value="UserID" />
                                <input type="hidden" name="user_id" value="0" />
                                <input type="hidden" name="realtor_email" value="Developer Email" />
                                <input type="hidden" name="listing_id" value="Listing ID" />
                                <input type="hidden" name="listing" className="form-control rounded-0" value="Title" />
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control rounded-0" placeholder="Name" value="Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control rounded-0" placeholder="Email Address" value="email" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" placeholder="Phone Number" className="form-control rounded-0" />
                                </div>
                                <div className="form-group mb-2">
                                    <textarea name="message" className="form-control rounded-0" placeholder="Enter Your Message"></textarea>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label text-muted" for="defaultCheck1">
                                        Schedule a tour
                                    </label>
                                    <br />
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                    <label className="form-check-label text-muted" for="defaultCheck2">
                                        Confirm Availibity
                                    </label>
                                </div>
                                <input type="submit" value="Request Info" className="btn btn-block btn-primary text-white" />
                            </Form>
                        </Form.Group>
                    </Col>
                </Card>

            </Row>
        )
    }
}

export default ListingContactCard;