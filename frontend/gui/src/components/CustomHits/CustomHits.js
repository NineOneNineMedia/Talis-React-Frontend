import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import PlacardGallery from "../PlacardGallery/PlacardGallery";
import { connectHits } from 'react-instantsearch-dom';

const Hits = ({ hits }) => (
    <ol>
        {hits.map(hit => (
            <Card key={hit.id} className="mb-2">
                <a href={`/listings/${hit.objectID}`}>
                    <Card.Header>
                        <Row>
                            <Col sm={9}>
                                <Row>{hit.title}</Row>
                                <Row>{hit.address}</Row>
                            </Col>
                            {/* <Col sm={3}>{data.developer}</Col> */}
                        </Row>
                    </Card.Header>
                </a>
                <Card.Body className="p-0">
                    <Row>
                        <Col sm={8}>
                            <PlacardGallery />
                        </Col>
                        <Col>
                            {/* <Row>{data.price}</Row>
                            <Row>{data.bedrooms.lower}</Row>
                            <Row>{data.bathrooms}</Row> */}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        ))}
    </ol>
);

export const CustomHits = connectHits(Hits);