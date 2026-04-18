import React from "react";
import profileImg from "../assets/asmita1.jpeg";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">

          {/* IMAGE */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="about-img-wrapper">
              <img src={profileImg} alt="about" />
            </div>
          </div>

          {/* TEXT */}
          <div className="col-md-7">
            <h2 className="section-title">About Me</h2>

            <p className="about-text">
              I am a passionate Frontend Developer who loves building modern,
              responsive, and user-friendly web applications. As a fresher, I am
              continuously learning and improving my skills in React and UI design.
            </p>

            {/* SKILLS */}
            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>

            {/* PROGRESS BARS */}
            <div className="skill-bars mt-4">
              <div className="bar">
                <p>HTML</p>
                <div className="progress">
                  <div className="progress-fill html"></div>
                </div>
              </div>

              <div className="bar">
                <p>CSS</p>
                <div className="progress">
                  <div className="progress-fill css"></div>
                </div>
              </div>

              <div className="bar">
                <p>JavaScript</p>
                <div className="progress">
                  <div className="progress-fill js"></div>
                </div>
              </div>

              <div className="bar">
                <p>React</p>
                <div className="progress">
                  <div className="progress-fill react"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;