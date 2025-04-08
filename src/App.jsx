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
          <p>
            I am passionate about building modern, scalable, and interactive web applications that make a difference. 
            With a strong foundation in both front-end and back-end development, I strive to create seamless user experiences.
          </p>
        </div>
        <img src="/public/wassim_main.png" alt="Wassim Bachtour" />
      </section>

      <section className="overview-container">
        <h2>About Me</h2>
        <p>
          Hello! I am Wassim, a full-stack developer with a deep enthusiasm for crafting 
          efficient and user-friendly web applications. I have always been fascinated by technology and its ability 
          to solve real-world problems, which led me to the start of my career in software development.
        </p>
        <p>
          Since August 2023, I have been honing my skills in modern web technologies, enabling me to build applications that 
          are not only functional but also visually appealing (I try lol). I enjoy collaborating with teams, learning new tools, 
          and making sure I am improving in any way possible.
        </p>
        <p>
          Outside of tech, I am also passionate about powerlifting. The discipline, focus, and consistency required in powerlifting 
          is kind of similar to software development. Just like in coding, every small improvement in powerlifting 
          adds up over time, and I enjoy pushing my limits both mentally and physically. Albeit that both disciplines are different, 
          they share the same core principles of perseverance, dedication, and continuous improvement no matter the setbacks.
        </p>
      </section>

      <section className="tech-stack-container">
        <h2>Tech Stack</h2>
        <div className="tech-logos">
          <img src="/public/vite.svg" alt="Vite" title="Vite" />
          <img src="/src/assets/react.svg" alt="React" title="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
          <img style={{ backgroundColor: 'red' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/laravel.svg" alt="Laravel" title="Laravel" />
          <img style={{ backgroundColor: 'purple' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" title="PHP" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
        </div>
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
