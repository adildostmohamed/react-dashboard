import React, { Component } from 'react';
import { Link } from 'react-router';

import AppData from 'mocks/AppData';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.renderNavItems = this.renderNavItems.bind(this);
  }

  renderNavItems() {
    const pages = AppData.pages;
    return pages.map((page)=>{
      return(
        <li className="m-nav__list-item" key={page.id}>
          <Link to={page.pathName} className="m-nav__list-link" activeClassName="m-nav__list-link--active">{page.displayName}</Link>
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="m-nav" role="navigation">
        <ul className="m-nav__list">
          { this.renderNavItems() }
        </ul>
      </nav>
    )
  }
}
