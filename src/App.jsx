import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "./components/Container";
import About from "./components/About";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Container>
        <nav className="nav-el">
          <div className="nav-container">
            <div className="logo-top">
              <img
                src="logo-img.png
              "
                className="logo-img-style"
                alt="build logo"
              />
            </div>
            <div className="nav-menu">
              <Link className="nav-item" to="/service">
                Services
              </Link>
              <Link className="nav-item" to="/about">
                About
              </Link>
              <Link className="nav-item" to="/blog">
                Blog
              </Link>
              <Link className="nav-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
