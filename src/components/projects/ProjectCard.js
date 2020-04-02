import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project, image, description, frontendTech, backendTech }) => (
    <div>
        <h1>{project}</h1>
        <img src={image} alt={description}></img>
        <p>{description}</p>
        <p>{frontendTech}</p>
        <p>{backendTech}</p>
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
