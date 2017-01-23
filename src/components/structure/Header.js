import React, { Component } from 'react';
import logo from 'images/pwc-logo-white.png';
import { Link } from 'react-router';

import Navigation from 'components/structure/Navigation';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.handleSignout = this.handleSignout.bind(this);
    this.renderUserAvatar = this.renderUserAvatar.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
    this.state = {
      showDropdown: false
    }
  }

  handleSignout(e) {
    e.preventDefault();
    this.props.signOutUser(this.props.user.uid);
  }

  renderUserAvatar() {
    if(this.props.user) {
      const user = this.props.user;
      return (
        <div className="m-banner__avatar-wrapper" onClick={ () => this.handleDropdownClick() }>
          <p className="m-banner__avatar-name">{user.firstName}</p>
          <img className="m-banner__avatar-img" src={user.photoURL} alt={`${user.firstName}`} />
          <i className="material-icons">arrow_drop_down</i>
        </div>
      )
    }
  }

  renderDropdown() {
    if(this.state.showDropdown === true) {
      return (
        <div className="m-header__dropdown-wrapper">
          <Link className="m-header__dropdown-link" to='/manage'>
            Manage content
          </Link>
          <Link className="m-header__dropdown-link" to='#' onClick={(event) => this.handleSignout(event)}>
            Sign out
          </Link>
        </div>
      )
    }
    return null;
  }

  handleDropdownClick() {
    let currentDropdownState = this.state.showDropdown;
    currentDropdownState = !currentDropdownState;
    this.setState({ showDropdown: currentDropdownState });
  }

  render() {
    return (
      <header className="m-header">
        <div role="banner" className="m-banner">
          <img className="m-banner__logo" src={logo} alt="logo" />
          {this.renderUserAvatar()}
        </div>
        { this.renderDropdown() }
        <Navigation appConfig={this.props.appConfig}/>
      </header>
    )
  }
}
