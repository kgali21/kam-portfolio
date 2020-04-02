import React from 'react';
import Header from './Header';
import SideBarNav from './SideBarNav';
import ProjectDeck from './projects/ProjectDeck';

import projectData from '../data/projectsData';

export default function App() {
  return (
    <>
      <Header />
      <SideBarNav />
      <ProjectDeck project={projectData} />
    </>
  );
}
