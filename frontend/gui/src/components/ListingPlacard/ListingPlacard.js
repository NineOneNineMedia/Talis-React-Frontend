import React from "react";
import { Card, Col, Row, Container } from 'react-bootstrap'
import PlacardGallery from "../PlacardGallery/PlacardGallery";

const ListingPlacard = (props) => {
    return (
        <div>
            {/* {props.data.map((data) => {
                return ( */}
            <Card>
                <Card.Header>
                    <Row>
                        <Col sm={9}>
                            <Row>Title</Row>
                            <Row>Address</Row>
                        </Col>
                        <Col sm={3}>Developer</Col>
                    </Row>
                </Card.Header>
                <Card.Body className="p-0">
                    <Row>
                        <Col sm={8}>
                            <PlacardGallery />
                        </Col>
                        <Col>
                            <Row>Price</Row>
                            <Row>Bedrooms</Row>
                            <Row>Bathrooms</Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* );
            })} */}
        </div >
    );
}

export default ListingPlacard;