import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import PrivPol from './components/PrivPol';
import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Route component={DesktopMenu} /> */}
        {/* <Route component={MobileMenu} /> */}
        <Route path="/" exact component={Home} />
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
