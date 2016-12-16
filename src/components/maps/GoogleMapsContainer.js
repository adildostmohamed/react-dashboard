import React, { Component } from 'react';

import GoogleMap from 'google-map-react';
import MapMarker from 'components/maps/MapMarker';


export default class GoogleMapContainer extends Component {
  constructor(props) {
    super(props);

    // this.renderMapLayerSelectContainer = this.renderMapLayerSelectContainer.bind(this);
    this.renderMapMarkers = this.renderMapMarkers.bind(this);
  }
  static defaultProps = {
    center: {lat: 51.5057, lng: -0.0837},
    zoom: 15
  };

  renderMapMarkers() {
    if(this.props.content && this.props.content.hasOwnProperty("mapMarkersData")) {
      const mapMarkersData = this.props.content.mapMarkersData;
      const mapMarkersDataKeys = Object.keys(mapMarkersData);
      return mapMarkersDataKeys.map((mapMarkersDataKey) => {
        const mapMarkerData = mapMarkersData[mapMarkersDataKey];
        const markers = mapMarkerData.markers;
        const markersKeys = Object.keys(markers);
        return markersKeys.map((markersKey, index) => {
          const markerData = markers[markersKey];
          return (
            <MapMarker key={index} lat={markerData.lat} lng={markerData.lng} style={mapMarkersDataKey} />
          )
        });
      });
    }
    return null;
  }

  render() {
    return (
      <div id="map-container" className="col-sm-12">
        <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyDTh4dhXcpicyqcz2Rtn1YBqoJ43Qf0c8Y',
            language: 'en'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
           { this.renderMapMarkers() }
          </GoogleMap>
      </div>
    )
  }
}
