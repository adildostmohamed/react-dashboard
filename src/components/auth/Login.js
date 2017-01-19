import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';
import base from 'config/rebase';
import { browserHistory } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.onLoginRedirect = this.onLoginRedirect.bind(this);
  }

  componentDidMount() {
    console.log('when do i turn up?');
    console.log(this.props.user);
  }

  componentWillMount() {
    console.log('hi');
    this.props.checkIfLoggedIn();
  }

  authHandler(error, user) {
    if(error) {
      console.log(error);
    }
    // noop if redirect is successful
    return;
  }

  onLoginRedirect(error, authData){
    if(error) {
      console.log(error);
    }
    if(authData.user){
      console.log(authData);
      this.props.setLoggedInUser(authData);
      browserHistory.push('/');
    } else {
      console.log('not logged in!');
      //redirect to google for auth
      base.authWithOAuthRedirect('google', this.authHandler);
    }
  }

  handleLogin() {
    base.authGetOAuthRedirectResult(this.onLoginRedirect);
  }

  render() {
    return (
      <div className="p-login">
        <button className="p-login__button" onClick={this.handleLogin}>
          Login first!
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, actions)(Login)
