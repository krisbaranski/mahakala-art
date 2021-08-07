import mahakala from '../img/mahakala-web.png';

const Home = () => {
  return (
    <div className="container home">
      <img src={mahakala} alt="Mahakala" />
      <div>
        <p className="home">Mahakala </p>
        <p> (Black Coat engl., Ber Nag Chen tib.,) </p>{' '}
        <p>44cm high, Zellan, Acrylic and Gold</p>
      </div>
    </div>
  );
};

export default Home;
