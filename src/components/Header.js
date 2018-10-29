import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchSys from './SearchSys';

import logo from './logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Movies</h1>
          </div>
        </Link>

        <Link to='/contact'>
          Contact Us
        </Link>

        <div className="searchBar">
          <SearchSys />
        </div>
      </header>
    );
  }
}

export default Header;
