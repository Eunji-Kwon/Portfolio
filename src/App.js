import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import { Element } from 'react-scroll';
import Header from './components/partials/Header';
import About from './components/About';
import Archive from './components/Archive';
import ArchivePage from './components/ArchivePage';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/partials/Footer';
import './App.css';

function App() {
  return (
    <Router>

 
        <div className="sidebar">
          <Header />
        </div>


        <div className="app-content">
       
          <Switch>
            <Route exact path="/">
              <Element name="about">
                <About />
              </Element>
              <Element name="archive">
                <Archive />
              </Element>
              <Element name="career">
                <Career />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
            </Route>
            <Route path="/archive" >
            <Element name="archivePage">
                <ArchivePage />
                </Element>
             
            </Route>
          </Switch>
          <Element name="footer">
          <Footer />
        </Element>
        </div>

    </Router>
  );
}

export default App;
