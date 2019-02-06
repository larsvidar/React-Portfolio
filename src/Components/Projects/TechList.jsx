//Imports
import React from 'react';
import PropTypes from 'prop-types';
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa';
import styles from './TechList.module.scss';

//Component function
const TechList = (props) => {
    return(
        <ul className={styles.techlist}>
            {props.technologies.map((tech, index) => {
                return (
                    // Conditional li-element showing icons based on tech-name.
                    <li title={tech} key={index * 1337}>
                        {tech.toLowerCase()  === "html5" &&
                            <FaHtml5 className={styles.html} />
                        }

                        {tech.toLowerCase()  === "css3" &&
                            <FaCss3Alt className={styles.css} />
                        }

                        {tech.toLowerCase()  === "javascript" &&
                            <FaJsSquare className={styles.javascript} />
                        }

                        {tech.toLowerCase()  === "jquery" &&
                            <img src={"./images/icons/jquery.svg"} alt={tech} className={styles.jquery}></img>
                        }

                        {tech.toLowerCase()  === "bootstrap" &&
                            <img src={"./images/icons/bootstrap.svg"} alt={tech} className={styles.bootstrap}></img>
                        }

                        {tech.toLowerCase() === "react" &&
                            <FaReact className={styles.react} />
                        }

                        {
                            <span> {tech}</span>
                        }
                    </li>
                );
            })}
        </ul>
    )
}

//PropTypes
TechList.propTypes = {
    technologies: PropTypes.array.isRequired,
  }

export default TechList;