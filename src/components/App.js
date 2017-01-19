import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';
import {} from 'styles/main.scss';
import logo from 'images/pwc-logo-white.png';
import { Link } from 'react-router';

import Navigation from 'components/structure/Navigation';

class App extends Component {
  componentWillMount() {
    this.props.checkAuthStatus();
  }
  componentDidMount() {
    this.props.getAppConfig();
  }

  handleSignout(e) {
    e.preventDefault();
    this.props.signOutUser();
  }

  render() {
    return (
      <div>
        <header className="m-header">
          <div role="banner" className="m-banner">
            <img className="m-banner__logo" src={logo} alt="logo" />
            <Link className="m-banner__link" to='/manage'>
              <i className="material-icons">settings</i>
            </Link>
            <Link className="m-banner__link" to='#' onClick={(event) => this.handleSignout(event)}>
              <i className="material-icons">clear</i>
            </Link>
          </div>
          <Navigation appConfig={this.props.appConfig}/>
        </header>
        <main id="main" className="main">
          { this.props.children }
        </main>
      </div>
    );
  }
}

//set the appConfig object in the global state to props.appConfig
function mapStateToProps(state) {
  return {
    appConfig: state.appConfig,
    user: state.auth
  }
}

//export the connected component
export default connect(mapStateToProps, actions)(App);
