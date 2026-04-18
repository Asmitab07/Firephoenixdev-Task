import React from "react";
import "./Project.css";


import project1 from "../assets/image.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website built using React, featuring responsive design, smooth navigation, and modern UI to showcase my projects and skills.",
      img: project1,
      live: "#",
      github: "#",
    },
    {
      title: "Landing Page",
      desc: "A responsive landing page designed using HTML, CSS, and Bootstrap, focusing on layout structure, typography, and mobile responsiveness.",
      img: project2,
      live: "#",
      github: "#",
    },
    {
      title: "Todo App",
      desc: "A simple and interactive Todo application built with React, allowing users to add, delete, and manage tasks efficiently..",
      img: project3,
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-center">My Projects</h2>

        <div className="row">
          {projects.map((p, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="project-card">

                {/* IMAGE */}
                <div className="project-img">
                  <img src={p.img} alt={p.title} />

                  {/* OVERLAY */}
                  
                </div>

                {/* TEXT */}
                <div className="project-content">
                  <h5>{p.title}</h5>
                  <p>{p.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;