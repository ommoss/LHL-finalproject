import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SideBar extends React.Component {
    constructor(props){
      super(props);
    }

   render() {
      return (
        <div>
        <h1>Tournaments near you!</h1>

        <div className="well" id="tournament-box">
            <h3><span id="tournament-name" className ="tourn-info">MarioCart Special</span></h3>
            <hr/>
            <h4>Game Type: <span id="tournament-game-type" className ="tourn-info">MarioCart64</span></h4>
            <h4>Location: <span id="tournament-location" className ="tourn-info">Garricks Head Pub</span></h4>
            <h4>Start Time: <span id="tournament-start-time" className ="tourn-info"> 4:00 pm</span></h4>
            <h4>Date: <span id="tournament-date" className ="tourn-info"> Dec 10, 2016 </span></h4>
            <h4>Max Players: <span id="tournament-player-max" className ="tourn-info"> 8 </span></h4>
            <h4>Current Players: <span id="tournament-player-current" className ="tourn-info"> 8 </span></h4>
            <button type="submit" className="btn btn-default">Join Tournament</button>
            <button type="submit" className="btn btn-default">More Details</button>
          </div>
        </div>
    );
  }
}

export default SideBar;