import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';
import '../Home/Home.css';

class App extends Component {
  render() {
    return (
      <div className='Home'>
        <Home />
      </div>
    );
  }
}

export default App;
