import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

 class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <DropdownButton pullRight id = "login" title = "Login">
        <form>
          <FormGroup controlId = "login" >
            <ControlLabel>Username</ControlLabel>
            <FormControl type = "text" />
            <ControlLabel>Password</ControlLabel>
            <FormControl type = "password" />
          </FormGroup>
        </form>
      </DropdownButton>
    );
  }
}

export default Login;