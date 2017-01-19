import React, { Component } from 'react';
import base from 'config/rebase';

import IframeSelector from 'components/iframes/IframeSelector';

export default class IframeSelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(`componentsData/${this.props.config.dataId}`,{
      context: this,
      state: 'items'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {

    return (
      <IframeSelector content={this.state.items} />
    )
  }
}
