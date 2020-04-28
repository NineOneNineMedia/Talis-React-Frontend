import React from "react";
import axios from "axios";
import { Jumbotron } from 'react-bootstrap';

class DashboardView extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <div className="container text-center jumbotron-content">
                        <h1 className="display-4 font-weight-bold">
                            User Profile
                        </h1>
                        <p className="h3 font-weight-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                        <hr></hr>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default DashboardView;