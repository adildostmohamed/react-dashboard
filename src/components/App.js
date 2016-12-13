import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';
import {} from 'styles/main.scss';

import Navigation from 'components/structure/Navigation';
import Login from 'components/auth/Login';

class App extends Component {
  componentDidMount() {
    this.props.getAppConfig();
  }
  render() {
    if(Object.keys(this.props.user).length === 0) {
      return <Login />
    }
    return (
      <div>
        <header className="m-header">
          <div role="banner" className="m-banner">
            Hello world
          </div>
          <Navigation appConfig={this.props.appConfig}/>
        </header>
        <main id="main" className="main">
          <h1>hello world</h1>
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
    user: state.user
  }
}

//export the connected component
export default connect(mapStateToProps, actions)(App);
