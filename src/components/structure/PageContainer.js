import React, { Component } from 'react';

//import app data mock
import AppData from 'mocks/AppData';

//import constructComponent function
import constructComponent from 'constructors/constructComponent';

export default class PageContainer extends Component {
  constructor(props) {
    super(props);

    this.renderPageComponents = this.renderPageComponents.bind(this);
  }
  renderPageComponents() {
    const pageToRender = AppData.pages.find((page)=>{
      return page.id === this.props.route.id;
    })

    return pageToRender.components.map((component, index) => {
      return constructComponent(component, index);
    });
  }
  render() {
    return (
      <div>
        { this.renderPageComponents() }
      </div>
    )
  }
}
