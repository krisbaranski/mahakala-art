import logo from '../logo.png';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="mahakala-art" />
      </a>
      <div>
        <ul className="nav">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/form">Form</a>
          </li>
          <li>
            <a href="/statues">Statues</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
