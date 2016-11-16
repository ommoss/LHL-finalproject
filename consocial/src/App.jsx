import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
          <nav>
            <h1>Consocial</h1>
            <div>
              <button className="btn-primary">Hey</button>
            </div>
          </nav>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
