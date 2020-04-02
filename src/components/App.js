import React from 'react';
import Header from './Header';
import ProjectDeck from './projects/ProjectDeck';

import projectData from '../data/projectsData';

import styles from './App.css';

export default function App() {
  return (
    <>
      <Header />
      <ProjectDeck project={projectData} className={styles.ProjectDeck}/>
    </>
  );
}
