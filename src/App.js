import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import DesktopMenu from './components/DesktopMenu';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <DesktopMenu />
        <AnimatedRoutes />
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
