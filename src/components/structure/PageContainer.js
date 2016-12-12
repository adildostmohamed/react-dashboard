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
    // if(this.props.appConfig && this.props.appConfig.pagesConfig) {
    //   const pages = this.props.appConfig.pagesConfig;
    //   const pageKeys = Object.keys(pages);
    //   console.log('hello');
    //   const pageToRender = pageKeys.find((pageKey) => {
    //     return pageKey.id === this.props.route.id;
    //   });
    //   const pageComponentsKeys = Object.keys(pageToRender.components);
    //
    //   return pageComponentsKeys.map((componentKey, index) => {
    //     const component = pageToRender.components[componentKey];
    //     console.log(component);
    //     return constructComponent(component, index);
    //   });
    // }
    // return null;
    if(this.props.appConfig) {
      return (
        <pre>{ JSON.stringify(this.props.appConfig, null, 2)}</pre>
      )
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
