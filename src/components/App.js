import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';
import {} from 'styles/main.scss';

import Navigation from 'components/structure/Navigation';

class App extends Component {
  componentDidMount() {
    this.props.getAppConfig();
  }
  render() {
    return (
      <div>
        <header className="m-header">
          <div role="banner" className="m-banner">
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
    user: state.user
  }
}

//export the connected component
export default connect(mapStateToProps, actions)(App);
