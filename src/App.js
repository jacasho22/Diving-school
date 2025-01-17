import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './pages/pages.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cursos from './pages/Cursos';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
