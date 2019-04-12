import React, { Component } from 'react';
import axios from 'axios';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../Map/Map';
import serverUrl from '../constants';
let markers = [];
export class Loocate extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  componentDidMount() {
    axios
      .get(serverUrl + '/loocations')
      .then(response => {
        console.log(response);
        markers = response.result;
        // this.setState({ markers: response.result });
        //this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  handleMarkers(e) {
    e.preventDefault();
    axios
      .get(serverUrl + '/users/signup', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        {markers.map(marker => (
          <Marker
            name={marker.author}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAVTIzc3qTmxDnp_tKDkIG4lYa-lmOlbD0',
})(Loocate);
