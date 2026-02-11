import React, { useEffect } from "react";
import "./App.css";

function App() {

  const showMessage = () => {
    alert("Thank you for your interest! Please contact me via email.");
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav>
        <h1 className="logo">MyPortfolio</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
        <h2>Hello, I'm <span>Shoeb Mulla</span></h2>
        <p>Web Developer | Designer | Frontend Developer</p>
        <button onClick={showMessage}>Hire Me</button>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m a recent BSc Computer Science graduate with a strong foundation
          in programming, data structures, and software development...
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>My Projects</h2>

        <a 
          href="https://github.com/ShoebMulla52/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
           GitHub
        </a>

        <div className="projects">
          <div className="card">
            <h4>Weather App</h4>
            <p>
              A simple weather application that allows users to check real-time weather information.
            </p>
          </div>

          <div className="card">
            <h4>Secure File Sharing System</h4>
            <p>
              A simple File sharing Application that helps users upload files securely.
            </p>
          </div>

          <div className="card">
            <h4>E-Commerce Cart App</h4>
            <p>
              A simple E-Commerce Application that helps users purchase products online.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Email: mullashoeb83@gmail.com</p>
        <p>Phone: 8010075137</p>
      </section>

      <footer>
        <p>© 2026 Shoeb Mulla. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

