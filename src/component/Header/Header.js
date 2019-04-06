import React, { Component } from 'react';
import Logo from '../../Images/Logo.png';
import { Link, Route } from 'react-router-dom';
import Loocate from '../Loocate/Loocate';
import Loocation from '../Loocation/Loocation';
import Humor from '../Humor/Humor';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Home from '../Home/Home';

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <div>
          <ul>
            <Link className='header-link' to='/login'>
              DROP IN
            </Link>

            <Link className='header-link' to='/signup'>
              SIGNUP
            </Link>

            <Link className='header-link' to='/humor'>
              HUMOR
            </Link>

            <Link className='header-link' to='/loocation'>
              LOOCATION
            </Link>

            <Link className='header-link' to='/loocator'>
              LOOCATE
            </Link>

            <Link className='app-logo' to='/home'>
              <img src={Logo} alt='loocate' />
            </Link>
          </ul>
        </div>

        <Route path='/homepage' component={Home} />
        <Route path='/loocate' component={Loocate} />
        <Route path='/loocation' component={Loocation} />
        <Route path='/humor' component={Humor} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

export default Header;
