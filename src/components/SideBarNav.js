import React from 'react';
import styles from './SideBarNav.css';

const SideBarNav = () => (
      <nav className={styles.Nav}>
        <p>About Me</p>
        <div>|</div>
        <p>Projects</p>
        <div>|</div>
        <p>Tech Stack</p>
        <div>|</div>
        <p>Contact Me</p>
      </nav>
);

export default SideBarNav;
