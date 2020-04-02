import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectCard.css';

const Project = ({ project, image, description, frontendTech, backendTech }) => (
    <div className={styles.ListItem}>
        <h1>{project}</h1>
        <img src={image}></img>
        <p>{description}</p>
        <p>Front-End Tech: {frontendTech}</p>
        <p>Back-End Tech: {backendTech}</p>
    </div>
)

Project.propTypes = {
    project: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    frontendTech: PropTypes.string,
    backendTech: PropTypes.string
}

export default Project;
