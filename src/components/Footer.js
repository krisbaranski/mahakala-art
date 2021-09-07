import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav">
        <Link to="/impressum">Disclaimer | Impressum</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
      </div>
      <p className="nav">Copyright &copy; 2021</p>
    </footer>
  );
};

export default Footer;
