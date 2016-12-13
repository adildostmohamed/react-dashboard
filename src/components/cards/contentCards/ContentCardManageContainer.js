import React, { Component } from 'react';

import ContentCardManage from 'components/cards/contentCards/ContentCardManage';
import base from 'config/rebase';

class ContentCardManageContainer extends Component {
  constructor(props) {
    super(props);

    this.updateContentCard = this.updateContentCard.bind(this);
    this.state = {
      contentCard: {}
    }
  }
  //sync this component to the firebase location and set it to the contentCard state of this component
  componentDidMount(){
    this.firebaseRef = base.syncState(`componentsData/${this.props.config.dataId}`,{
      context: this,
      state: 'contentCard'
    });
  }
  //remove the binding to the firebase ref when the component unmounts
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }

  //function that will be called by the ContentCardManage component that will update the state on this component and sync it with firebase

  updateContentCard(updatedContentCard) {
    const updatedCard = {...this.state.contentCard, ...updatedContentCard}
    this.setState({
      contentCard: updatedCard
    })
  }

  render() {
    return (
      <div>
        <ContentCardManage content={this.state.contentCard} updateContentCard={this.updateContentCard}/>
      </div>

    )
  }
}

export default ContentCardManageContainer;
