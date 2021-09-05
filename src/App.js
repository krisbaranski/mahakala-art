import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import MahakalaForm from './components/MahakalaForm';
import Statues from './components/Statues';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import PrivatePolicy from './components/PrivatePolicy';
import DesktopMenu from './components/DesktopMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route component={DesktopMenu} />
        <Route path="/mahakala-art" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/form" component={MahakalaForm} />
        <Route path="/statues" component={Statues} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/privacy-policy" component={PrivatePolicy} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
