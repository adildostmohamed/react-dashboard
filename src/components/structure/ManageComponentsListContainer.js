import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from 'actions/index';

class ManageComponentsListContainer extends Component {
  constructor(props) {
    super(props);

    this.renderListOfManageComponents = this.renderListOfManageComponents.bind(this);
  }
  componentDidMount() {
    this.props.getComponentsConfig();
  }
  renderListOfManageComponents() {
    const components = this.props.componentsConfig;
    const componentKeys = Object.keys(components);
    return componentKeys.map((componentKey) => {
      const component = components[componentKey];
      return (
        <li className="m-list-item" key={componentKey}>
          <span className="m-list-item__content-wrapper">
            <Link to={`/manage/${component.id}`} className="m-list-item__link">
              <p className="m-list-item__title">{component.type}</p>
            </Link>
            <hr className="m-list-item__divider" />
          </span>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <div className="m-scroll-list__wrapper">
          <div className="m-scroll-list__title-wrapper">
            <h3 className="m-scroll-list__title">List of components</h3>
          </div>
          <ul className="m-scroll-list">
            { this.renderListOfManageComponents() }
          </ul>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    componentsConfig: state.componentsConfig
  }
}

export default connect(mapStateToProps, actions)(ManageComponentsListContainer);
