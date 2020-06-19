import React from "react";
import axios from "axios";
import { Form, Row, Col, DropdownButton, FormControl, InputGroup, Container, Dropdown } from 'react-bootstrap';

import Header from '../../components/Header/Header'
import ListingsFooter from '../../components/ListingsFooter/ListingsFooter'
import ListingPlacard from '../../components/ListingPlacard/ListingPlacard'
import ListingsMap from '../../components/ListingsMap/ListingsMap'

const priceOptions = ["No Max", "$1000", "$2000", "$3000", "$4000", "$5000"]
const bedOptions = ["1+", "2+", "3+", "4+", "5+"]
const orderOptions = ["Default", "Price (High to Low)", "Price (Low to High)", "Newest Listings", "Bedrooms"]

class ListingsView extends React.Component {
    state = {
        neighborhood: '',
        order: orderOptions[0],
        orderFilter: '',
        listings: [],
    };

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/listings/").then((res) => {
            this.setState({
                listings: res.data,
            })
            console.log(res.data)
        });
    }

    searchListings = () => {
        axios.get(`http://127.0.0.1:8000/api/listings/?ordering=${this.state.orderFilter}&search=${this.state.neighborhood}`).then((res) => {
            this.setState({
                listings: res.data,
            })
            console.log(res.data)
        });
    }

    handleInputChange = () => {
        this.setState({
            neighborhood: this.search.value
        }, () => {
            if (this.state.neighborhood && this.state.neighborhood.length > 1) {
                if (this.state.neighborhood.length % 2 === 0) {
                    this.searchListings()
                }
            }
        })
    }

    selectBeds

    selectOrder = (eventKey, event) => {
        this.setState({
            order: orderOptions[eventKey]
        }, () => {
            if (this.state.order === 'Default') {
                this.setState({
                    orderFilter: ''
                })
            }
            else if (this.state.order === 'Price (High to Low)') {
                this.setState({
                    orderFilter: '-price_range'
                })
            }
            else if (this.state.order === 'Price (Low to High)') {
                this.setState({
                    orderFilter: 'price_range'
                })
            }
            else if (this.state.order === 'Newest Listings') {
                this.setState({
                    orderFilter: 'list_date'
                })
            }
            else if (this.state.order === 'Bedrooms') {
                this.setState({
                    orderFilter: '-bedrooms'
                })
            }
            this.searchListings()
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Header />
                <Container fluid style={{ marginTop: "4.5rem" }}>
                    <Form className="listings-form">
                        <Form.Row>
                            <Col md={4}>
                                <InputGroup>
                                    <FormControl
                                        placeholder="Neighborhood"
                                        ref={input => this.search = input}
                                        onChange={this.handleInputChange}
                                    />
                                </InputGroup>
                            </Col>
                            <DropdownButton onSelect={this.selectOrder} drop="bottom" className="mx-1" title="Max Price">
                                {priceOptions.map((opt, i) => (
                                    <Dropdown.Item key={i} eventKey={i}>
                                        {opt}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                            <DropdownButton onSelect={this.selectOrder} drop="bottom" className="mx-1" title="Beds">
                                {bedOptions.map((opt, i) => (
                                    <Dropdown.Item key={i} eventKey={i}>
                                        {opt}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                            <DropdownButton onSelect={this.selectOrder} drop="right" className="sort mx-1" title="Sort">
                                {orderOptions.map((opt, i) => (
                                    <Dropdown.Item key={i} eventKey={i}>
                                        {opt}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Form.Row>
                    </Form>
                </Container>
                <Container fluid>
                    <Row>
                        <Col md={5} className="pr-0 listings-page">
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