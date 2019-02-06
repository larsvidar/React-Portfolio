//Imports
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './BackgroundAnim.scss';

//Gets number of bubbles to show from CSS-file.
let bubbleNumber = parseInt(Styles.bubbles, 10);

function bubbles() {
  let circles = [];
  for (let i = 1; i <= bubbleNumber; i++) {
    circles.push("circle-" + i);
  }
  return circles;
}

//Component function
const BackgroundAnim = props => {
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

//PropTypes (At the moment numberOfBubbles does nothing).
BackgroundAnim.propTypes = {
  numberOfBubbles: PropTypes.string.isRequired,
};

export default BackgroundAnim;
