// Imports
import React, { Component } from 'react';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class SearchBar extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: '',
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }

  handleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ['(cities)'],
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
      });
    }
  }

  render() {
    return (
      <div>
        <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyAVTIzc3qTmxDnp_tKDkIG4lYa-lmOlbD0libraries=places'
          onLoad={this.handleScriptLoad}
        />
        <SearchBar
          id='autocomplete'
          placeholder=''
          hintText='Search City'
          value={this.state.query}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
