import React from 'react';
import PropTypes from 'prop-types';
import styles from './GitLink.module.scss';

import {FaGithub} from 'react-icons/fa';

const GitLink = (props) => {
    return (
    <a href={props.github} className={styles.githublink}>
        <FaGithub  className={styles.githublogo} />
        <p>This project on GitHub</p>
    </a>
    );
}

GitLink.propTypes = {
    github: PropTypes.string.isRequired
}

export default GitLink;