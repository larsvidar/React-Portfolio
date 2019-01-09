import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from "./Components/Header/Title";
import Projects from "./Components/Projects/Projects";
import BackgroundAnim from "./Components/BackgroundAnim";
import './App.css';


class App extends Component {
  constructor(props) {
      super(props);
      this.projects = props.projects;
  }

  render() {
    return (
      <div className="app">
        <Title title="Lars Vidar Nordli"
               tag="Developer"/>
        <Projects projects = {this.projects} />
        <div className="backgroundanimation">
          <BackgroundAnim numberOfBubbles="50" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default App;
