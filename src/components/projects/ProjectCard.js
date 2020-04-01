import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project, img, description, frontendTech, backendTech }) => (
    <div>
        <h1>{project}</h1>
        <image>{img}</image>
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
