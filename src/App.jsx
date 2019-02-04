import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Components/Header/Title';
import Projects from './Components/Projects/Projects';
import BackgroundAnim from './Components/BackgroundAnim';
import styles from './App.module.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.projects = props.projects;
  }

  render() {
    return (
      <div className={styles.app}>
        <Title title="Lars Vidar Nordli"
               tag="Developer" />
        <Projects projects = {this.projects} />
        <BackgroundAnim numberOfBubbles="50" />
      </div>
    );
  }
}

App.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default App;
