import React from "react";
import profileImg from "../assets/asmita1.jpeg";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-6">
            <h1 className="hero-title">
              Hello, I’m <br />
              <span>Asmita Bakale</span> <br />
              Frontend Developer
            </h1>

            <p className="hero-text">
              I build modern, responsive web interfaces using React with clean UI and smooth UX.
            </p>

            <a href="#projects" className="btn btn-main">
  Browse Projects
</a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">
            <div className="hero-image-box">
              <img src={profileImg} alt="profile" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;