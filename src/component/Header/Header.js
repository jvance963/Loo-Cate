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
            <li>
              <Link className='header-link' to='/login'>
                DROP IN
              </Link>
            </li>

            <li>
              <Link className='header-link' to='/signup'>
                SIGNUP
              </Link>
            </li>
            <li>
              <Link className='header-link' to='/humor'>
                HUMOR
              </Link>
            </li>

            <li>
              <Link className='header-link' to='/loocation'>
                LOOCATION
              </Link>
            </li>
            <li>
              <Link className='header-link' to='/loocate'>
                LOOCATE
              </Link>
            </li>
            <li>
              <Link className='app-logo' to='/'>
                <img src={Logo} alt='loocate' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
