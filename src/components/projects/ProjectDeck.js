import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectDeck = ({ project }) => {
    const projectElements = project.map(projectItem => (
        <li key={`${projectItem.project}`}>
            <ProjectCard {...projectItem} />
        </li>
    ));

    return (
        <>
        <h1>Projects: </h1>
        <ul>{projectElements}</ul>
        </>
    );
}

ProjectDeck.propTypes = {
    project: PropTypes.arrayOf(PropTypes.shape({
        project: PropTypes.string,
        img: PropTypes.string,
        description: PropTypes.string,
        frontendTech: PropTypes.string,
        backendTech: PropTypes.string
    }))
};

export default ProjectDeck;