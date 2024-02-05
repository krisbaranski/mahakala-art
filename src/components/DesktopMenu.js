import React from 'react';
import { Link } from 'react-router-dom';

const DesktopMenu = () => {
  return (
    <header>
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
    </header>
  );
};

export default DesktopMenu;
