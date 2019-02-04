import React from 'react';
import PropTypes from 'prop-types';
import {FaHtml5, FaCss3, FaJsSquare, FaReact} from 'react-icons/fa';
import styles from './TechList.module.scss';

const TechList = (props) => {
    return(
        <ul className={styles.techlist}>
            {props.technologies.map((tech, index) => {
                return (
                <li title={tech} key={index * 1337}>
                    {tech.toLowerCase()  === "html5" &&
                    <FaHtml5 />
                    }

                    {tech.toLowerCase()  === "css3" &&
                    <FaCss3 />
                    }

                    {tech.toLowerCase()  === "javascript" &&
                    <FaJsSquare />
                    }

                    {tech.toLowerCase()  === "jquery" &&
                    <img src={"./images/icons/jquery.svg"} alt={tech} width="15"></img>
                    }

                    {tech.toLowerCase()  === "bootstrap" &&
                    <img src={"./images/icons/bootstrap.svg"} alt={tech} width="20"></img>
                    }

                    {tech.toLowerCase() === "react" &&
                    <FaReact />
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

TechList.propTypes = {
    technologies: PropTypes.array.isRequired,
  }

export default TechList;