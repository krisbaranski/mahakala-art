import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="mahakala-art" />
      </Link>
    </header>
  );
};

export default Header;
