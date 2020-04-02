import React from 'react';
import ProjectDeck from './projects/ProjectDeck';
import projectData from '../data/projectsData'; 

import styles from './SideBarNav.css';

const SideBarNav = () => (
  <>
    <div className={styles.SideBarNav}>
      <nav className={styles.Nav}>
        <p>Home</p>
        <p>About Me</p>
        <p>Portfolio</p>
        <p>Contact Me</p>
      </nav>
    </div>
    <div className={styles.ProjectDeck}>
        <ProjectDeck project={projectData} />
    </div>
  </>
);

export default SideBarNav;
