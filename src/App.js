import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import Statues from './components/Statues';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import PrivPol from './components/PrivPol';
import DesktopMenu from './components/DesktopMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route component={DesktopMenu} />
        <Route path="/mahakala-art" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/form" component={Form} />
        <Route path="/statues" component={Statues} />
        <Route path="/contact" component={Contact} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/privacy-policy" component={PrivPol} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
