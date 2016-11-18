import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map, {Marker, InfoWindow} from 'google-maps-react'

class GoogleMap extends React.Component {
     constructor(props){
      super(props);
      this.state = {
        google: "",
        position: {lat: 41, lng: -180},
        selectedPlace: "LHL"
    }
    this.geoFindMe = this.geoFindMe.bind(this);
    this.success = this.success.bind(this);

  }
  geoFindMe() {

    if (!navigator.geolocation){
      console.log("Browser is not compatible");
      return;
    }
    function error() {
      console.log("error")
    }
    navigator.geolocation.getCurrentPosition(this.success, error);
  }
  success(position) {
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;
    this.setState({position:
      {lat: latitude,
       lng: longitude}})
    return position = {lat: latitude, lng: longitude}
  }
  render() {
    return (
      <Map
        google={window.google}
        onOpen = {this.geoFindMe}
        initialPosition = {this.geoFindMe}
        mapCenter={this.state.position}
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
