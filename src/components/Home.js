import mahakala from '../img/mahakala-web.png';

const Home = () => {
  return (
    <section className="container">
      <div className="home">
        <img src={mahakala} alt="Mahakala" />
      </div>
      <div className="home_text">
        <h3>Mahakala </h3>
        <p>Black Coat (eng.) Ber Nag Chen (tib.)</p>
        <p>44cm height, plaster casting, acrylic</p>
      </div>
    </section>
  );
};

export default Home;
