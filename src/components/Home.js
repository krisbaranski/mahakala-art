import React from 'react';
import mahakala from '../img/mahakala_web.png';
import { Link } from 'react-router-dom';
// import mahakala from 'https://images.ctfassets.net/x9ncw0vro2xo/Z66r1CvcuDADvxcFlcQgf/d0c0615c6653e87175dc7cc22fb8ca9c/mahakala-web.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="home">
        <img src={mahakala} alt="Mahakala Statue, Black Coat, Ber Nag Chen" />
      </div>
      <div className="home_text">
        <h1>Mahakala</h1>
        <p>Black Coat (eng) Ber Nag Chen (tib)</p>
        <p>44cm height, plaster casting, acrylic</p>
        <br />
        <p>
          available to{' '}
          <Link to="/contact" className="order">
            order
          </Link>
        </p>
      </div>
    </motion.section>
  );
};

export default Home;
