import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="repo-cards-div-main">
          {bigProjects.projects.map(project => {
            return (
              <div
                className="startup-card-div"
                key={project.link}
                onClick={() => openProjectInNewWindow(project.link)}
              >
                <img alt="Réalisation de Valentin LEROY" src={project.image}></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
