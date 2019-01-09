import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = props => {
  return (
    <div className="title">
      <h1 className="headline">{props.title}</h1>
      <h2 className="tagline">{props.tag}</h2>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Title;
