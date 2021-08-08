import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import PrivPol from './components/PrivPol';
import MenuMobile from './components/MenuMobile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MenuMobile />
        <Route path="/home" exact component={Home} />
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
