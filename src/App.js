import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import ScrollToTop from './components/ScrollToTop';
import Menu from './components/Menu';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Menu />
        <AnimatedRoutes />
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
