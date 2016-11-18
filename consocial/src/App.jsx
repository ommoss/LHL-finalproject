import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/Nav.jsx'
import SimpleMap from './googlemap/GoogleMap.jsx'

class App extends React.Component {
   constructor(props){
      super(props);
      this.socket = new WebSocket("ws://localhost:4000");
      this.state = {}
   }

   render() {
      return (
      <div>
        <div>
        <Nav />
        </div>
        <div>
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
