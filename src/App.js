import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import BaseRouter from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@material-ui/core/styles';
import talisTheme from './theme/index.js'
import './scss/App.scss'
import * as actions from './store/actions/auth'


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Router>
          <ThemeProvider theme={talisTheme} >
            <BaseRouter />
          </ThemeProvider>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
