import React, { Component } from 'react';
import logo from './usa_map.jpg';
import './App.css';

import Itinerary, { Test } from './itinerary/Itinerary';
import Map from './map/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Trip</h1>
        </header>
        <p className="App-intro">
          Where shall we go?
        </p>
        <div className='itinerary-container'>
          <div className='list'>
            THIS IS WHERE THE TEXT GOES
            <Itinerary widget={"Test"} />
          </div>
          <div className='map'>
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
