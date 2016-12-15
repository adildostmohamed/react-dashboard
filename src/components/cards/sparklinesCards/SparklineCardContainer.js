import React, { Component } from 'react';

import SparklineCard from 'components/cards/sparklinesCards/SparklineCard';
import base from 'config/rebase';

export default class SparklineCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sparkline: {}
    }
  }
  componentDidMount() {
    this.firebaseRef = base.syncState(`componentsData/${this.props.config.dataId}`, {
      context: this,
      state: 'sparkline'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef)
  }
  render() {
    return (
      <SparklineCard content={this.state.sparkline} />
    )
  }
}
