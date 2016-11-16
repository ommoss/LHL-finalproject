import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

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
              <Button className = "navRight">Sign Up</Button>
              <Button className = "navRight">Login</Button>
              <Button className = "navRight btn">Create tournament</Button>
              <Button className = "btn-primary navRight">Find tournament</Button>
          </nav>

        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
