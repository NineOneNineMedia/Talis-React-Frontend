import React from "react";
import axios from "axios";
import { Form, Row, Col, Container } from 'react-bootstrap';

import Header from '../../components/Header/Header'
import ListingsFooter from '../../components/ListingsFooter/ListingsFooter'
import ListingPlacard from '../../components/ListingPlacard/ListingPlacard'
import ListingsMap from '../../components/ListingsMap/ListingsMap'

class ListingsView extends React.Component {
    state = {
        listings: [],
    };

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api-listings/").then((res) => {
            this.setState({
                listings: res.data,
            })
            console.log(res.data)
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Container fluid style={{ marginTop: "4.5rem" }}>
                    <Form className="listings-form">
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="Neighborhood" />
                            </Col>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Container>
                <Container fluid>
                    <Row>
                        <Col md={5} className="pr-0 listings-page">
                            <ListingPlacard data={this.state.listings} />
                            <ListingPlacard data={this.state.listings} />
                            <ListingsFooter />
                        </Col>
                        <Col md={7} className="pl-0">
                            <ListingsMap />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ListingsView;