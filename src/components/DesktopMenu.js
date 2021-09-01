import { Link } from 'react-router-dom';

const DesktopMenu = () => {
  return (
    <div className="desktop">
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
  );
};

export default DesktopMenu;
