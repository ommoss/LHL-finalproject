import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

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
            <h1>Consocial</h1>z
            <ButtonToolbar className = "navRight">
              <ButtonGroup>
              <Button>Create tournament</Button>
              <Button>Find tournament</Button>
              </ButtonGroup>
              <ButtonGroup>
              <Button>Sign Up</Button>
              <Button>Login</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </nav>

        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
