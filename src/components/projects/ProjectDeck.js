import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

import styles from './ProjectDeck.css';

const ProjectDeck = ({ project }) => {
    const projectElements = project.map(projectItem => (
        <li key={`${projectItem.project}`}>
            <ProjectCard {...projectItem} />
        </li>
    ));

    return (
        <>
        <h1>Projects: </h1>
        <div className={styles.Ulist}>
            <ul className={styles.ProjectElements}>{projectElements}</ul>
        </div>
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