import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/home" className="logo">
        <img src={logo} alt="mahakala-art" />
      </Link>
      <div>
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
      </div>
    </header>
  );
};

export default Header;
