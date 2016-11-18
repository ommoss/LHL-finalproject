import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap.jsx';
import SideBar from './SideBar.jsx';
import Col from 'react-bootstrap/lib/Col';

class Main extends React.Component {
    constructor(props){
      super(props);
    }

   render() {
      return (
      <div>
        <Col xs={4} md={4}>
          <SideBar />
        </Col>
        <div>
        <Col id = "map" xs={8} md={8}>
          <GoogleMap />
        </Col>
        </div>
      </div>
    );
  }
}

export default Main;