import React, { Component } from 'react';

import base from 'config/rebase';
import GoogleMapsContainer from 'components/maps/GoogleMapsContainer';

export default class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: {}
    }
  }

  componentDidMount() {
    this.firebaseRef = base.syncState(`componentsData/${this.props.config.dataId}`,{
      context: this,
      state: 'mapData'
    });
  }
  render() {
    return (
      <GoogleMapsContainer content={this.state.mapData} />
    )
  }
}
