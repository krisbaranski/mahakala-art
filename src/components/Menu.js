import React, { useState } from 'react';
import logo from '../logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = () => {
  // setting mobile nav
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      {/* Desktop menu */}
      <div className="hidden">
        <Link to="/" className="logo">
          <img src={logo} alt="mahakala-art" loading="lazy" />
        </Link>
        <div className="nav">
          <Link className="nav" to="/about">
            About
          </Link>
          <Link className="nav" to="/form">
            Form
          </Link>
          <Link className="nav" to="/statues">
            Statues
          </Link>
          <Link className="nav" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div onClick={handleClick} className="mobile-visibility">
        {/* Logo */}
        <div>
          <Link to="/" className={nav ? 'hidden' : 'mobile-logo'}>
            <img src={logo} alt="mahakala-art" loading="lazy" />
          </Link>
        </div>
        {/* Hamburger */}

        <div className="mobile-visibility">
          {!nav ? <FaBars className="fa" /> : <FaTimes className="fa" />}
        </div>
      </div>
      {/* Dropdown menu */}
      <div className="mobile-visibility">
        <ul className={!nav ? 'hidden' : 'hamburger'}>
          <li className="mobile">
            <Link to="/" className="menu-logo">
              <img src={logo} alt="mahakala-art" loading="lazy" />
            </Link>
          </li>
          <li className="mobile">
            <Link onClick={handleClick} to="/about" className="mobile-menu">
              About
            </Link>
          </li>
          <li className="mobile">
            <Link onClick={handleClick} to="/form" className="mobile-menu">
              Form
            </Link>
          </li>
          <li className="mobile">
            <Link onClick={handleClick} to="/statues" className="mobile-menu">
              Statues
            </Link>
          </li>
          <li className="mobile">
            <Link onClick={handleClick} to="/contact" className="mobile-menu">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
