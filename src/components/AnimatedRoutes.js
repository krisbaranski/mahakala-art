import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './Home';
import About from './About';
import MahakalaForm from './MahakalaForm';
import Statues from './Statues';
import ContactForm from './ContactForm';
import Impressum from './Impressum';
import PrivacyPolicy from './PrivacyPolicy';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<MahakalaForm />} />
        <Route path="/statues" element={<Statues />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
