import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import NavBar from './layout/NavBar';
import Container from './layout/Container';
import Footer from './layout/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Manual from './pages/Manual';
import Contato from './pages/Contato';
import Carrinho from './componets/Carrinho'
import Comprar from './componets/Comprar';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/manualdeuso">
            <Manual />
          </Route>
          <Route exact path="/contact">
            <Contato />
          </Route>
          <Route exact path="/carrinho">
            <Carrinho />
          </Route>
          <Route exact path="/comprar">
            <Comprar />
          </Route>
        </Container>
      </Switch>
      <Footer />
     </Router> 
    </div>
  );
}

export default App;
