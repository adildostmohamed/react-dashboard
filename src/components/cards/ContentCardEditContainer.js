import React, { Component } from 'react';

import ContentCardEdit from 'components/cards/ContentCardEdit';

class ContentCardEditContainer extends Container {
  constructor(props) {
    super(props);

    this.state = {
      contentCard: {}
    }
  }
  //sync this component to the firebase location and set it to the contentCard state of this component
  componentDidMount(){
    this.firebaseRef = base.syncState(`components/${this.props.id}`,{
      context: this,
      state: 'contentCard'
    });
  }
  //remove the binding to the firebase ref when the component unmounts
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {
    return (
      <ContentCardEdit content={this.state.contentCard} />
    )
  }
}

export default ContentCardEditContainer;
