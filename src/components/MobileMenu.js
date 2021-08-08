import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div className="mobile">
      <ul>
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
      <i className="close">close</i>
    </div>
  );
};

export default MobileMenu;
