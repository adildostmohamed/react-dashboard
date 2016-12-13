import React, { Component } from 'react';
import { connect } from 'react-redux';

//import constructDisplayComponent function
import constructDisplayComponent from 'constructors/constructDisplayComponent';

class RouteDisplayContainer extends Component {
  constructor(props) {
    super(props);

    this.renderDisplayComponents = this.renderDisplayComponents.bind(this);
  }
  renderDisplayComponents() {
    //check that the pagesConfig object is available
    if(this.props.appConfig.pagesConfig) {
      //create a variable for the pages part of the overall app object
      const pages = this.props.appConfig.pagesConfig;

      //get the keys of the pages object/array, even if it is in an array if it changes to be stored as keys by id this will still work
      const pagesKeys = Object.keys(pages);

      //find the pageKey for which the pageId is equal to the id passed in to the route
      const pageKeyToRender = pagesKeys.find((pageKey) => {
        const page = pages[pageKey];
        return page.id === this.props.route.id;
      });

      //find the page object to render
      const pageToRender = pages[pageKeyToRender];

      //map over the components array in the pageToRender object to construct the required component
      return pageToRender.components.map((component, index) => {
        return constructDisplayComponent(component, index);
      });
    }
    return null;
  }
  render() {
    return (
      <div>
        { this.renderDisplayComponents() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    appConfig: state.appConfig
  }
}

export default connect(mapStateToProps, null)(RouteDisplayContainer);
