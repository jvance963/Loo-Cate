import React, { Component } from 'react';
import './App.css';
import '../Home/Home.css';
import Home from '../Home/Home';
import '../Header/Header.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
