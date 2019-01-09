import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

const Project = props => {
  return(
    <div className="project-container">
        <h3 className="project-title">{props.projectTitle}</h3>
        <img className="project-thumb" src={props.imageSrc} alt={props.imageAlt}></img>
        <p className="project-description">{props.projectDescription}</p>
    </div>
  );
}

Project.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
}

export default Project;
