import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav">
        <li>
          <Link to="/impressum">Disclaimer | Impressum</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
      </div>
      <p className="nav">Copyright &copy; 2021</p>
    </footer>
  );
};

export default Footer;
