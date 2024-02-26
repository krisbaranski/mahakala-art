import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="nav">
        <Link className="nav" to="/impressum">
          Impressum
        </Link>
        <Link className="nav" to="/privacypolicy">
          Privacy Policy
        </Link>
      </div>
      <div className="nav">
        <p className="nav">&copy; Mahakala-Art {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
