import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        <h1>Consocial</h1>
          <ButtonToolbar className = "navRight">
            <ButtonGroup>
              <Button>Create tournament</Button>
              <Button>Find tournament</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>Sign Up</Button>
              <DropdownButton>Login</DropdownButton>
            </ButtonGroup>
          </ButtonToolbar>
      </div>
    );
  }
}

export default Nav;
