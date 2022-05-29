import React from 'react';
import { Link } from 'react-router-dom';

const DesktopMenu = () => {
  return (
    <header className="header">
      <ul className="nav">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/statues">Statues</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default DesktopMenu;
