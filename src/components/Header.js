import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  // const menuBtn = document.querySelector('.menu');
  // const closeBtn = document.querySelector('.close');

  // function useMenuBtn() {
  //   menuBtn.addEventListener('click', () => {
  //     menuBtn.classList.toggle('desktop');
  //     closeBtn.classList.add('desktop');
  //   });
  // }

  // function useCloseBtn() {
  //   menuBtn.addEventListener('click', () => {
  //     menuBtn.classList.add('desktop');
  //     closeBtn.classList.remove('desktop');
  //   });
  // }

  // useMenuBtn();
  // useCloseBtn();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="mahakala-art" />
      </Link>
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
        <i className="menu fa fa-bars"></i>
        <i className="close fas fa-times"></i>
      </div>
    </header>
  );
};

export default Header;
