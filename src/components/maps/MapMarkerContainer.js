import React, { Component } from 'react';

import MapMarker from 'components/maps/MapMarker';

export default class MapMarkerContainer extends Component {
  constructor(props) {
    super(props);

    this.renderMapMarkers = this.renderMapMarkers.bind(this);
  }

  renderMapMarkers() {
    if(this.props.markers) {
      const markers = this.props.markers;
      const mapMarkerKeys = Object.keys(markers);
      return mapMarkerKeys.map((mapMarker, index) => {
        const markerData = markers[mapMarker];
        return (
          <MapMarker key={index} lat={markerData.lat} lng={markerData.lng} />
        )
      });
    }
    return null;
  }
  render() {
    return (
      <div>
        { this.renderMapMarkers() }
      </div> 
    )
  }
}
