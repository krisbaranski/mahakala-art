import React, { useState, useEffect } from 'react';
import logo from '../logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = () => {
  // setting mobile nav
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 50 ? setColor(true) : setColor(false);
  };

  window.addEventListener('scroll', changeColor);

  // Trigger on scroll event
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });

  // Show menubar while scrolling down, otherwise hide
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData(prevState => {
        return {
          y: window.scrollY,
          lastY: prevState.y,
        };
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollData.y > 200) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    if (scrollData.lastY > scrollData.y) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    if (scrollData.lastY === scrollData.y || scrollData.y === 0) {
      setShowNav(true);
    }
  }, [scrollData]);

  return (
    // Show and hide navbar at scroll event
    <div
      className={showNav ? 'menu_scroll show_menu' : 'menu_scroll hide_menu'}
    >
      {/* Desktop menu */}
      <div
        onScroll={changeColor}
        className={color ? 'menu-scroll hidden' : 'menu-fixed hidden'}
      >
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
      <div
        className={
          color
            ? 'menu-scroll mobile-visibility'
            : 'menu-fixed mobile-visibility'
        }
      >
        {/* Logo */}

        <Link to="/" className={!nav ? 'mobile-logo' : 'hidden'}>
          <img src={logo} alt="mahakala-art" loading="lazy" />
        </Link>

        {/* Hamburger */}
        <div onClick={handleClick} className="mobile-visibility">
          {!nav ? <FaBars className="fa" /> : <FaTimes className="fa" />}
        </div>
      </div>

      {/* Dropdown menu */}
      <div className="mobile-visibility">
        <ul className={!nav ? 'hidden' : 'hamburger'}>
          <li className="mobile">
            <Link onClick={handleClick} to="/" className="menu-logo">
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
