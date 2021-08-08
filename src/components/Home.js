import mahakala from '../img/mahakala-web.png';

const Home = () => {
  return (
    <section className="container">
      <div className="home">
        <img src={mahakala} alt="Mahakala" />
      </div>
      <div className="home_text">
        <h3>Mahakala </h3>
        <br />
        <p>Black Coat (engl.) Ber Nag Chen (tib.)</p>
        <br />
        <p>44cm height, porclain plaster form, acrylic and gold</p>
      </div>
    </section>
  );
};

export default Home;
