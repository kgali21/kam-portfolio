import React from 'react';
const Project = ({ project, img, description, frontendTech, backendTech }) => (
    <div>
        <h1>{project}</h1>
        <image>{img}</image>
        <p>{description}</p>
        <p>{frontendTech}</p>
        <p>{backendTech}</p>
    </div>
)

export default Project;
