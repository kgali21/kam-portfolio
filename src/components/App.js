import React from 'react';
import Header from './Header';
import SideBarNav from './SideBarNav';
import ProjectDeck from './projects/ProjectDeck';

import projectData from '../data/projectsData';

import styles from './App.css';

export default function App() {
  return (
    <>
      <Header />
      <SideBarNav />
      <div className={styles.ProjectDeck}>
        <ProjectDeck project={projectData} />
      </div>
    </>
  );
}
