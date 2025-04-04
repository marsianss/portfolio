import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function Home() {
  const waveRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const wavePath = waveRef.current;
      const waveAmplitude = 20 + scrollY * 0.05;
      const waveFrequency = 50 + scrollY * 0.1;

      const waveD = `M0,50 Q${waveFrequency / 2},${50 - waveAmplitude} ${waveFrequency},50 T${waveFrequency * 2},50 T${waveFrequency * 3},50 T${waveFrequency * 4},50 T${waveFrequency * 5},50`;
      wavePath.setAttribute('d', waveD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <svg id="flowing-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
        <path ref={waveRef} d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50 T250,50" fill="none" stroke="#61dafb" strokeWidth="2" />
      </svg>

      <section id="home" className="home">
        <div className="home-content">
          <div className="intro">
            <h1>Wassim Bachtour</h1>
            <p>Full-Stack Developer</p>
            <p>Passionate about building modern, scalable, and interactive web applications.</p>
          </div>
          <div className="image-placeholder">
            {/* i still have to make a picture thats actually viable to put on the portfolio sobbing rn */}
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="portfolio">
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
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
