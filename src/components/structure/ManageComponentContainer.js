import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';

//

import constructManageComponent from 'constructors/constructManageComponent';

class ManageComponentContainer extends Component {
  constructor(props) {
    super(props);

    this.renderManageComponent = this.renderManageComponent.bind(this);
  }
  componentWillMount() {
    this.props.getComponentsConfig();
  }
  renderManageComponent() {
    if(Object.keys(this.props.componentsConfig).length !== 0) {
      const components = this.props.componentsConfig;
      const componentKeys = Object.keys(components);

      const manageComponentToRender = componentKeys.find((componentKey) => {
        const manageComponent = components[componentKey];
        return manageComponent.id === this.props.params.id;
      });

      return constructManageComponent(components[manageComponentToRender]);
    }
    return null;
  }
  render() {
    return (
      <div className="container">
        { this.renderManageComponent() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    componentsConfig: state.componentsConfig
  }
}

export default connect(mapStateToProps, actions)(ManageComponentContainer);
