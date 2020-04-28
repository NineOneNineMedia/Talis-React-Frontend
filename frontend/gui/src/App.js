import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss'


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <BaseRouter />
        </Router>
      </div>
    );
  }
}

export default App;
