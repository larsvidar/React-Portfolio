import React from 'react';
import PropTypes from 'prop-types';
import Project from "./Project";
import "./Projects.css";

const Projects = props => {
  return (
    <div className="projects">
      <div className="projects-headline">
        <hr></hr>
        <h3 className="projects-title">My projects</h3>
        <hr></hr>
      </div>
      <div className="project-item">
        {props.projects.map((array, index) => {
          return (
            <Project
              key = {index}
              projectTitle = {array[0]}
              projectDescription = {array[1]}
              imageSrc = {array[2]}
              imageAlt = {array[1]} /> )
        })}
      </div>
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default Projects;
