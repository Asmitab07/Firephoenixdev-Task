import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand logo" href="#home">
          Asmita<span> Bakale</span>
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a href="#home" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>

         
         <a href="/cv.pdf" download="Asmita-Bakale-CV.pdf" className="btn download-btn ms-lg-3">
  Download CV
</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;