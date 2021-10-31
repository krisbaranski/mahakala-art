import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import MahakalaForm from './components/MahakalaForm';
import Statues from './components/Statues';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import PrivacyPolicy from './components/PrivacyPolicy';
import DesktopMenu from './components/DesktopMenu';
import ScrollToTop from '/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <div className="App">
            <Header />
            <Route component={DesktopMenu} />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/form" component={MahakalaForm} />
            <Route path="/statues" component={Statues} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Footer />
          </div>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
