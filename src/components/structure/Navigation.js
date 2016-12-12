import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.renderNavItems = this.renderNavItems.bind(this);
  }


  //function to render the navigation items from the navItems state on the component
  renderNavItems() {
    if(this.props.appConfig && this.props.appConfig.hasOwnProperty("pagesConfig")) {
      const pagesConfig = this.props.appConfig.pagesConfig;
      const pageIds = Object.keys(pagesConfig);

      return pageIds.map((pageId) => {
        const page = pagesConfig[pageId];
        return (
          <li className="m-nav__list-item" key={page.id}>
            <Link to={page.pathName} className="m-nav__list-link" activeClassName="m-nav__list-link--active">{page.displayName}</Link>
          </li>
        )
      });
    }
    return null;
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
