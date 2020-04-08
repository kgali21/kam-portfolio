import React from 'react';
import Header from './Header';
import ProjectDeck from './projects/ProjectDeck';
import AboutMe from './aboutMe/AboutMe';
import TechStack from './techStack/TechStackCard';

import projectData from '../data/projectsData';

import styles from './App.css';

export default function App() {
  return (
    <>
      <Header />
      <AboutMe/>
      <ProjectDeck project={projectData} className={styles.Projects}/>
      <TechStack />
    </>
  );
}
