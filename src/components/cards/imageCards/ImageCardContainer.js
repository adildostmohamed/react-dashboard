import React, { Component } from 'react';
import base from 'config/rebase';

import ImageCard from 'components/cards/imageCards/ImageCard';

class ImageCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageCard: {}
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(`componentsData/${this.props.config.dataId}`,{
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
