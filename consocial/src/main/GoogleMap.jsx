import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Map, Marker, InfoWindow} from 'google-maps-react'
class GoogleMap extends React.Component {
     constructor(props){
      super(props);
      this.state = {
        google: "",
        position: {
          lat: 48.4167,
          lng: -123.367},
          selectedPlace: "LHL"}
    }
    render() {
      return (
        <Map
        google={window.google}
        zoom={14}>
          <Marker
          name='LHL'
          position={this.state.position} />
          <InfoWindow
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
        </Map>
    );
  }
}

export default GoogleMap;
