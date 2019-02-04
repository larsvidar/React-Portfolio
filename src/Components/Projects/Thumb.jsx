import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumb.module.scss';

const Thumb = (props) => {
    return (
        <a href={props.link} className={styles.projectthumb} target="_blank" rel="noopener noreferrer">
            <img src={"./images/" + props.image} alt={props.name}></img>
        </a>
    );
}

Thumb.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Thumb;