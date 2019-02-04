import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.module.scss';

import Thumb from './Thumb';
import TechList from './TechList';
import GitLink from './GitLink';

const Project = props => {
  return(
    <div className={styles.project}>
      <a href={props.project.link} target="_blank" rel="noopener noreferrer">
        <h3>{props.project.name}</h3>
      </a>

      <Thumb 
        name = {props.project.name}
        link = {props.project.link} 
        image = {props.project.image} />

      <p dangerouslySetInnerHTML={{__html: props.project.description}}></p>
      
      <TechList technologies = {props.project.technologies} />
      <GitLink github={props.project.github} />
      
      <hr></hr>

    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export default Project;
