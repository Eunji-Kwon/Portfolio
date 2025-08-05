import React, { useEffect, useState } from 'react';
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

// 새 네비게이션 바 컴포넌트 추가
function Navbar({visible}) {
  return (
    <nav
      className={`navbar navbar-expand navbar-light bg-light justify-content-center ${visible ? 'navbar--visible' : 'navbar--hidden'}`}
      onMouseEnter={() => { /* handled in parent */ }}
      onMouseLeave={() => { /* handled in parent */ }}
    >      <ul className="navbar-nav flex-row">
        <li className="nav-item mx-2">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#archive">Archive</a>
        </li>
         <li className="nav-item mx-2">
          <a className="nav-link" href="#career">Career</a>
        </li>
         <li className="nav-item mx-2">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function App() {

  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // 마우스가 상단 60px에 들어오면 네비바 보이기
    const handleMouseMove = (e) => {
      if (e.clientY < 60) setNavbarVisible(true);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>

          <Navbar visible={navbarVisible}/> {/* 네비게이션 바 추가 */}
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
