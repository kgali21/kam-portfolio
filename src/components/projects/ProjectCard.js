import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectCard.css';

const Project = ({ project, image, description, frontendTech, backendTech, site, github }) => (
    <>
    <div className={styles.ListItem}>
        <h1>{project}</h1>
        <img src={image}></img>
        <p>{description}</p>
        <p>Front-End Tech: {frontendTech}</p>
        <p>Back-End Tech: {backendTech}</p>
        <div className={styles.Links}>
            <a href={site}>Site</a>
            <a href={github}>GitHub</a>
        </div>
    </div>
    </>
)

Project.propTypes = {
    project: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    frontendTech: PropTypes.string,
    backendTech: PropTypes.string
}

export default Project;
