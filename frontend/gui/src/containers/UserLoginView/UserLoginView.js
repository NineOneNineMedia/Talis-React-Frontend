import React from "react";
import { Col, Container, Row, Button, Form, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import SignInForm from '../../components/SignInForm/SignInForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function App() {
    return (
        <Router>
            <Container className="pt-4 mt-5 col-md-5 text-center">
                <h1>Welcome to Talis</h1>
                <Row>
                    <Col col={6}>
                        <Link to="/login">Log in</Link>
                    </Col>
                    <Col col={6}>
                        <Link to="/register">Create accout</Link>
                    </Col>
                </Row>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login">
                        <SignInForm />
                    </Route>
                    <Route path="/register">
                        <SignUpForm />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}
