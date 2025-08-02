import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll'; // For scroll functionality

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
        <Routes>
          {/* Route for the main page */}
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />

          {/* Route for the archive page */}
          <Route
            path="/archive"
            element={
              <Element name="archivePage">
                <ArchivePage />
              </Element>
            }
          />
        </Routes>

        {/* Footer section */}
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    </Router>
  );
}

export default App;
