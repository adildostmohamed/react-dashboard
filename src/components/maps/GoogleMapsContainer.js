import React, { Component } from 'react';

import GoogleMap from 'google-map-react';


export default class GoogleMapsContainer extends Component {
  static defaultProps = {
    center: {lat: 51.5057, lng: -0.0837},
    zoom: 15
  };

  render() {
    return (
      <div id="map-container" className="col-sm-12">
        <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyDTh4dhXcpicyqcz2Rtn1YBqoJ43Qf0c8Y',
            language: 'en'
          }}
          defaultCenter={this.props.center}
         defaultZoom={this.props.zoom} />
      </div>
    )
  }
}
