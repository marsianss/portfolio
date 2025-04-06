import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function Home() {
  return (
    <div className="home">
      <section className="home-container">
        <div className="intro">
          <h1>Wassim Bachtour</h1>
          <p>Full-Stack Developer</p>
          <p>Passionate about building modern, scalable, and interactive web applications.</p>
        </div>
        <img src="/public/wassim_main.png" alt="Wassim Bachtour" />
      </section>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`portfolio ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
            <i className={`bi ${darkMode ? 'bi-moon' : 'bi-sun'}`}></i>
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
