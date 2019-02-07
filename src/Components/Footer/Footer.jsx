//Imports
import React from 'react';
import styles from './Footer.module.scss';

//Component function
const Footer = (props) => {
    return(
        <ul className={styles.footer}>
            <li>
                <p>Designed and coded by Lars Vidar Nordli</p>
            </li>
            <li>&#9679;</li>
            <li>
                <p>&copy;2019</p>
            </li>
            <li>&#9679;</li>
            <li>
                <p>Created with React and Sass</p>
            </li>
            <li>&#9679;</li>
            <li>
                <a href="https://github.com/larsvidar/React-Portfolio">
                    <p>This project on GitHub</p>
                </a>
            </li>
        </ul>
    );
}

export default Footer;