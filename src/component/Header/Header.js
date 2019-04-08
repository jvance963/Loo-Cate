import React, { Component } from 'react';
import Logo from '../../Images/Logo.png';
import { Link, Route } from 'react-router-dom';
import '../Header/Header.css';

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

            <Link className='header-link' to='/loocate'>
              LOOCATE
            </Link>

            <Link className='app-logo' to='/'>
              <img src={Logo} alt='loocate' />
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
