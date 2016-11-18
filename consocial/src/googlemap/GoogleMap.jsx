import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Map, Marker} from 'google-maps-react'
class GoogleMap extends React.Component {

   render() {
      return (
        <Map google={window.google} zoom={14}>
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
        </Map>

    );
  }
}

export default GoogleMap;
