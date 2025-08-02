import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './components/partials/Header';
import About from './components/About';
//import Projects from './components/Projects';
import ArchivePage from './components/ArchivePage';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
