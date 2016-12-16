import React, { Component } from 'react';

export default class MapMarker extends Component {
  render() {
    return (
      <div><i className={`material-icons m-map__marker-icon--${this.props.style}`}>place</i></div>
    )
  }
}
