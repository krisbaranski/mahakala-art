import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import PrivPol from './components/PrivPol';
import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';
import mahakala from './img/mahakala-web.png';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Route component={DesktopMenu} /> */}
        {/* <Route component={MobileMenu} /> */}
        <Route
          path=""
          exact
          render={props => (
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
          )}
        />
        <Route path="/about" exact component={About} />
        <Route path="/form" exact component={Form} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/privacy-policy" component={PrivPol} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
