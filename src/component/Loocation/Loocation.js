import React, { Component } from 'react';
import axios from 'axios';

const geoMap =
  'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,MountainView,CA&key=AIzaSyAVTIzc3qTmxDnp_tKDkIG4lYa-lmOlbD0 ';

class Loocation extends Component {
  geoCall = () => {
    axios.get(geoMap).then(response => {
      console.log(response);
      // let newLoocation = response.data.bpi[loocation].map;
      // this.props.setLoocation(newLoocation);
    });
  };

  render() {
    return (
      <div>
        <h1> Fuck You </h1>
        <button onClick={this.geoCall}>Submit</button>
      </div>
    );
  }
}

export default Loocation;
