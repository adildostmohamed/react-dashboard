import React, { Component } from 'react';
import base from 'config/rebase';

import ScrollableList from 'components/lists/ScrollableList';

export default class ScrollableListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: {}
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(`componentsData/${this.props.config.dataId}`, {
      context: this,
      state: 'list'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {
    return (
      <ScrollableList content={this.state.list} />
    )
  }
}
