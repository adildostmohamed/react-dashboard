import React, { Component } from 'react';

import IframeManage from 'components/iframes/IframeManage';
import base from 'config/rebase';

class IframeManageContainer extends Component {
  constructor(props) {
    super(props);

    this.updateIframe = this.updateIframe.bind(this);
    this.state = {
      iframe: {}
    }
  }
  //sync this component to the firebase location and set it to the contentCard state of this component
  componentDidMount(){
    this.firebaseRef = base.syncState(`componentsData/${this.props.config.dataId}`,{
      context: this,
      state: 'iframe'
    });
  }
  //remove the binding to the firebase ref when the component unmounts
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }

  //function that will be called by the ContentCardManage component that will update the state on this component and sync it with firebase

  updateIframe(updatedIframe) {
    const iframe = {...this.state.iframe, ...updatedIframe}
    this.setState({
      iframe: iframe
    })
  }

  render() {
    return (
      <div>
        <IframeManage content={this.state.iframe} updateIframe={this.updateIframe} />
      </div>
    )
  }
}

export default IframeManageContainer;
