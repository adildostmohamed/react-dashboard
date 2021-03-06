import React, { Component } from 'react';
import base from 'config/rebase';

import Iframe from 'components/iframes/Iframe';

class IframeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iframe: {}
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(`componentsData/${this.props.config.dataId}`,{
      context: this,
      state: 'iframe'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {
    return (
      <Iframe content={this.state.iframe} />
    )
  }
}

export default IframeContainer;
