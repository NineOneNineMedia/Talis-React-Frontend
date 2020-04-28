import React from "react";
import axios from "axios";
import { Jumbotron } from 'react-bootstrap';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class AboutView extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Jumbotron fluid>
                    <div className="container text-center jumbotron-content">
                        <h1 className="display-4 font-weight-bold">
                            About Talis
                        </h1>
                        <p className="h3 font-weight-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                        <hr></hr>
                    </div>
                </Jumbotron>
                <Footer />
            </div>
        );
    }
}

export default AboutView;