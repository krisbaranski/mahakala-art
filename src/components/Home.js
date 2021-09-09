import React from 'react';
import mahakala from '../img/mahakala_web.png';
// import mahakala from 'https://images.ctfassets.net/x9ncw0vro2xo/6nsCXs1EELUs2Wuhvhoh0f/fc2d703c476aedd7c8819213ee906054/Maha_Wroc.jpg';

const Home = () => {
  return (
    <section className="container">
      <div className="home">
        <img src={mahakala} alt="Mahakala" />
      </div>
      <div className="home_text">
        <h3>Mahakala </h3>
        <p>Black Coat (eng) Ber Nag Chen (tib)</p>
        <p>44cm height, plaster casting, acrylic</p>
      </div>
    </section>
  );
};

export default Home;
