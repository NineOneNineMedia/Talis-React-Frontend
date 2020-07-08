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

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({

});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Switch>
            <Route path="/login">
                <SignInForm />
            </Route>
            <Route path="/register">
                <SignUpForm />
            </Route>
        </Switch>
    );
}

// export default function App() {
//     return (
//         <Router>
//             <Container className="pt-4 mt-5 col-md-5 text-center">
//                 <h1>Welcome to Talis</h1>
//                 <Row>
//                     <Col col={6}>
//                         <Link to="/login">Log in</Link>
//                     </Col>
//                     <Col col={6}>
//                         <Link to="/register">Create accout</Link>
//                     </Col>
//                 </Row>


//                 {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//                 <Switch>
//                     <Route path="/login">
//                         <SignInForm />
//                     </Route>
//                     <Route path="/register">
//                         <SignUpForm />
//                     </Route>
//                 </Switch>
//             </Container>
//         </Router>
//     );
// }
