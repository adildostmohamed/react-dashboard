import React, { Component } from 'react';
import base from 'config/rebase';

import ImageCard from 'components/cards/ImageCard';

class ImageCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageCard: {}
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(`components/${this.props.id}`,{
      context: this,
      state: 'imageCard'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {
    return (
      <ImageCard content={this.state.imageCard} />
    )
  }
}

export default ImageCardContainer;
