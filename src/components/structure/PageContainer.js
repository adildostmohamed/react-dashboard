import React, { Component } from 'react';
import { connect } from 'react-redux';

//import constructComponent function
import constructComponent from 'constructors/constructComponent';

class PageContainer extends Component {
  constructor(props) {
    super(props);

    this.renderPageComponents = this.renderPageComponents.bind(this);
  }
  renderPageComponents() {
    if(this.props.appConfig.pagesConfig) {
      const pages = this.props.appConfig.pagesConfig;

      const pageToRender = pages.find((page) => {
        return page.id === this.props.route.id;
      });

      return pageToRender.components.map((component, index) => {
        return constructComponent(component, index);
      });
    }
    return null;
  }
  render() {
    return (
      <div>
        { this.renderPageComponents() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    appConfig: state.appConfig
  }
}

export default connect(mapStateToProps, null)(PageContainer);
