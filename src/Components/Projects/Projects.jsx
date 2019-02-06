// Imports
import React from 'react';
import PropTypes from 'prop-types';
import Project from "./Project";
import styles from "./Projects.module.scss";

//Component function
const Projects = props => {
  return (
    <div className={styles.projects}>
      <div className={styles.myprojects}>
        <hr></hr>
        <h3>My projects</h3>
        <hr></hr>
      </div>
      <div>
        {props.projects.map((project, index) => {
          return (
              <Project
                project = {project}
                key = {index} /> )
        })}
      </div>
    </div>
  );
}

//PropTypes
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default Projects;
