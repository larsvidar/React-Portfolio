//Imports
import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";

//Component function
const Title = props => {
  return (
    <div className={styles.title}>
      <h1 className={styles.headline}>{props.title}</h1>
      <h2 className={styles.tagline}>{props.tag}</h2>
    </div>
  );
}

//PropTypes
Title.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Title;
