import React from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { GoogleMapsLoader, GeoSearch, Control, Marker } from 'react-instantsearch-dom-maps';
import { InstantSearch, SearchBox, Pagination, Hits, RefinementList } from 'react-instantsearch-dom';
import Header from '../../components/Header/Header';
import { Container, Col, Form, Row, DropdownButton, DropdownItem } from 'react-bootstrap';
import { CustomHits } from '../../components/CustomHits/CustomHits'
import ListingsFooter from '../../components/ListingsFooter/ListingsFooter'
import { CustomSearchBox } from '../../components/CustomSearchBox/CustomSearchBox'
import { CustomPagination } from '../../components/CustomPagination/CustomPagination'
import { CustomSortBy } from '../../components/CustomSortBy/CustomSortBy'
import { PriceNumericMenu } from '../../components/PriceNumericMenu/PriceNumericMenu';
import { BedsNumericMenu } from '../../components/BedsNumericMenu/BedsNumericMenu';
import { StaticRefinementList } from '../../components/CustomRefinementList/CustomRefinementList';
import 'instantsearch.css/themes/algolia.css';

const searchClient = algoliasearch(
    '0K8NJFG4JX',
    'd084a720871c4f1cb8e2dd7478c03b57'
);

class ListingView extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <InstantSearch
                    indexName="TalisTest_test_LISTING_dev"
                    searchClient={searchClient}
                >
                    <Container fluid style={{ marginTop: "4.5rem" }}>
                        <Form className="listings-form">
                            <Form.Row>
                                <CustomSearchBox />
                                <PriceNumericMenu items={[
                                    { label: '$1000', end: 1000 },
                                    { label: '$2000', end: 2000 },
                                    { label: '$3000', end: 3000 },
                                    { label: '$4000', end: 4000 },
                                    { label: '$5000', end: 5000 },
                                ]}
                                />
                                <BedsNumericMenu items={[
                                    { label: '1+', start: 1 },
                                    { label: '2+', start: 2 },
                                    { label: '3+', start: 3 },
                                    { label: '4+', start: 4 },
                                ]}
                                />
                                {/* <StaticRefinementList
                                    attribute="property_type"
                                    operator="and"
                                    values={[
                                        { label: 'House', value: 'House' },
                                        { label: 'Condo', value: 'Condo' },
                                    ]}
                                /> */}
                                <RefinementList
                                    attribute="property_type"
                                    operator="and"
                                // items={[
                                //     { label: 'Apartment', Value: 'Apartment' },
                                //     { label: 'Condo', Value: 'Condo' },
                                //     { label: 'House', Value: 'House' },
                                //     { label: 'Townhouse', Value: 'Townhouse' },
                                // ]}
                                />
                                {/* <CustomSortBy items={[
                                    { value: 'instant_search_price_asc', label: 'Price asc.' },
                                    { value: 'instant_search_price_desc', label: 'Price desc.' },
                                ]} /> */}
                            </Form.Row>
                        </Form>
                    </Container>

                    <Container fluid>
                        <Row>
                            <Col md={5} className="pr-0 listings-page">
                                <CustomHits />
                                <Pagination showNext={true} showPrevious={true} showLast={true} className="mb-3" />
                                <ListingsFooter />
                            </Col>
                            <Col md={7} className="pl-0">
                                <div style={{ height: "100%" }}>
                                    {/* <GoogleMapsLoader apiKey="AIzaSyC00vQGfJ3FNZ2oM-GkUMT4vYJOxyXQv64">
                                        {google => (
                                            <GeoSearch
                                                google={google}
                                                initialZoom={10}
                                                initialPosition={{
                                                    lat: 5.55602,
                                                    lng: -0.1969,
                                                }}>
                                                {({ hits }) => (
                                                    <div>
                                                        <Control />
                                                        {hits.map(hit => (
                                                            <Marker key={hit.objectID} hit={hit} />
                                                        ))}
                                                    </div>
                                                )}
                                            </GeoSearch>
                                        )}
                                    </GoogleMapsLoader> */}
                                </div>
                                {/* <ListingsMap /> */}
                            </Col>
                        </Row>
                    </Container>
                </InstantSearch>

            </div>
        )
    }
};

export default ListingView;
