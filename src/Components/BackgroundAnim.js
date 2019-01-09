import React from 'react';
import PropTypes from 'prop-types';
import Styles from './BackgroundAnim.css';

//Gets number of bubbles to show from CSS-file.
let bubbleNumber = parseInt(Styles.bubbles, 10);

const BackgroundAnim = props => {
  function bubbles() {
    let circles = [];
    for (let i = 1; i <= bubbleNumber; i++) {
      circles.push("circle-" + i);
    }
    console.log(circles);
    return circles;
  }

  return(
    <div className="background-anim">
      {bubbles().map((array, index) => {
        return(
          <div
            key={index}
            className={array}>
          </div>
        );
      })}
    </div>
  );
}

BackgroundAnim.propTypes = {
  numberOfBubbles: PropTypes.string.isRequired,
};

export default BackgroundAnim;
