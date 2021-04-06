import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';

import Flat from './flat';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  constructor(props) {
    super(props);
    this.state = {
      flats
    };
  }

  render () {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}></GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
