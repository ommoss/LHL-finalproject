import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map, {Marker, InfoWindow} from 'google-maps-react'
class GoogleMap extends React.Component {
     constructor(props){
      super(props);
      this.state = {
        google: "",
        position: {
          lat: 48.4167,
          lng: -123.367},
        selectedPlace: "LHL"
    }
    this.geoFindMe = this.geoFindMe.bind(this);
    this.success = this.success.bind(this);

  }
  geoFindMe() {

    console.log(this)

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
    console.log(this)
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    this.setState({position:
      {lat: latitude,
        lng: longitude}})

  }
    render() {
      return (
        <Map
        google={window.google}
           initialCenter={this.state.position}
        zoom={14}
        onReady = {this.geoFindMe}>
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
