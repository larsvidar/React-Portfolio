//Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.scss';

//Component imports
import Title from './Components/Header/Title';
import Projects from './Components/Projects/Projects';
import BackgroundAnim from './Components/BackgroundAnim';
import Footer from './Components/Footer/Footer';



class App extends Component {
  //App-constructor
  constructor(props) {
    super(props);
    this.projects = props.projects;
  }

  //Render markup
  render() {
    return (
      <div className={styles.app}>
        <Title title="Lars Vidar Nordli"
               tag="Developer" />
        <Projects projects = {this.projects} />
        <Footer />

        <BackgroundAnim numberOfBubbles="50" />
      </div>
    );
  }
}

//PropTypes
App.propTypes = {
  projects: PropTypes.array.isRequired,
}


export default App;
