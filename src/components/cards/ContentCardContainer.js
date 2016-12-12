import React, { Component } from 'react';
import base from 'config/rebase';

import ContentCard from 'components/cards/ContentCard';

class ContentCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentCard: {}
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(`components/${this.props.id}`,{
      context: this,
      state: 'contentCard'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {
    return (
      <ContentCard content={this.state.contentCard} />
    )
  }
}

export default ContentCardContainer;
