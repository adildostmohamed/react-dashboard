import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';
import {} from 'styles/main.scss';

import Header from 'components/structure/Header';

class App extends Component {
  componentWillMount() {
    this.props.checkAuthStatus();
  }
  componentDidMount() {
    this.props.getAppConfig();
  }
  render() {
    return (
      <div>
        <Header user={this.props.user.user} appConfig={this.props.appConfig} signOutUser={this.props.updateUserOnSignOut}/>
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
