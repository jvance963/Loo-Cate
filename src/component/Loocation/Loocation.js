import React, { Component } from 'react';
import axios from 'axios';
import AddressForm from '../AddressForm/AddressForm';

class Loocation extends Component {
  geoCall = geoMap => {
    axios.get(geoMap).then(response => {
      console.log(response);
      // let newLoocation = response.data.bpi[loocation].map;
      // this.props.setLoocation(newLoocation);
    });
  };

  render() {
    return (
      <div>
        <AddressForm geoCall={this.geoCall} />
      </div>
    );
  }
}

export default Loocation;
