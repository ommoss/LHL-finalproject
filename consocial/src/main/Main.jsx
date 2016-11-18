import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap.jsx'

class Main extends React.Component {
    constructor(props){
      super(props);
    }

   render() {
      return (
      <div>
          <GoogleMap />
      </div>
    );
  }
}

export default Main;