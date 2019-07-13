import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './style.css';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    lat: this.props.lat,
    lng: this.props.lng,
  }

  render() {
    return (
      <div className="map-wrapper">
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyASPfjzDrOAJ5LsJEHHssZG7NR066h4gQQ'
})(MapContainer);