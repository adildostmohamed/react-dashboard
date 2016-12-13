import React, { Component } from 'react';

import ImageCardManage from 'components/cards/imageCards/ImageCardManage';
import base from 'config/rebase';

class ImageCardManageContainer extends Component {
  constructor(props) {
    super(props);

    this.updateImageCard = this.updateImageCard.bind(this);
    this.state = {
      imageCard: {}
    }
  }
  //sync this component to the firebase location and set it to the contentCard state of this component
  componentDidMount(){
    this.firebaseRef = base.syncState(`componentsData/${this.props.config.dataId}`,{
      context: this,
      state: 'imageCard'
    });
  }
  //remove the binding to the firebase ref when the component unmounts
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }

  //function that will be called by the ContentCardManage component that will update the state on this component and sync it with firebase

  updateImageCard(updatedImageCard) {
    const updatedCard = {...this.state.imageCard, ...updatedImageCard};
    this.setState({
      imageCard: updatedCard
    })
  }

  render() {
    return (
      <div>
        <ImageCardManage content={this.state.imageCard} updateImageCard={this.updateImageCard}/>
      </div>

    )
  }
}

export default ImageCardManageContainer;
