import React from "react";
import { Card, Col, Row, Container } from 'react-bootstrap'
import PlacardGallery from "../PlacardGallery/PlacardGallery";

const ListingPlacard = (props) => {
    return (
        <div>
            {props.data.map((data) => {
                return (
                    <Card key={data.id} className="mb-2">
                        <a href={`/listings/${data.id}`}><Card.Header>
                            <Row>
                                <Col sm={9}>
                                    <Row>{data.title}</Row>
                                    <Row>{data.address}</Row>
                                </Col>
                                <Col sm={3}>{data.developer}</Col>
                            </Row>
                        </Card.Header>
                        </a>
                        <Card.Body className="p-0">
                            <Row>
                                <Col sm={8}>
                                    <PlacardGallery />
                                </Col>
                                <Col>
                                    <Row>{data.price}</Row>
                                    <Row>{data.bedrooms.lower}</Row>
                                    <Row>{data.bathrooms}</Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                );
            })}
        </div >
    );
}

export default ListingPlacard;