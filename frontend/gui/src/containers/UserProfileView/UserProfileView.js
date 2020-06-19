import React from "react";
import { Jumbotron, Container, Row, Col, Nav, ListGroup } from 'react-bootstrap';
import axios from "axios";
import cardImg1 from '../../assets/img/blackfam.jpg'
import cardImg2 from '../../assets/img/Kitchen.jpg'
import cardImg3 from '../../assets/img/familymovingin.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ListingCards from '../../components/ListingCards/ListingCards';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserProfile from "../../components/UserProfile/UserProfile";
import FavoriteListings from "../../components/FavoriteListings/FavoriteListings";

class UserProfileView extends React.Component {
    state = {
        listings: [],
    };

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/pages/").then((res) => {
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
                <Jumbotron fluid className="p-0">
                    <div className="jumbotron-overlay">
                        <div className="container text-center jumbotron-content">
                            <h1 className="display-4 font-weight-bold">
                                myTalis
                        </h1>
                        </div>
                    </div>
                </Jumbotron>
                <Router>
                    <Container className="py-4 my-5">
                        <h1>Welcome to Talis</h1>
                        <Row>
                            <Col className="col-md-3">
                                <ListGroup variant="flush" defaultActiveKey="#link1">
                                    <Link to="/myTalis/profile"><ListGroup.Item action href='#1'>
                                        Profile
                                    </ListGroup.Item></Link>
                                    <Link to="/myTalis/favorites"><ListGroup.Item action href='#2'>
                                        Saved Listings
                                    </ListGroup.Item></Link>
                                    <Link to="/myTalis/account"><ListGroup.Item action href='#3'>
                                        Account
                                    </ListGroup.Item></Link>
                                </ListGroup>
                            </Col>


                            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                            <Col className="col-md-9">
                                <Switch>
                                    <Route path="/myTalis/profile">
                                        <UserProfile />
                                    </Route>
                                    <Route path="/myTalis/favorites">
                                        <FavoriteListings />
                                    </Route>
                                    <Route path="/myTalis/account">
                                        Account Settings
                            </Route>
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </Router>

                <Footer />
            </div >
        );
    }
}

export default UserProfileView;