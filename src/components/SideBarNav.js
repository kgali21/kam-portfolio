import React from 'react';
import styles from './SideBarNav.css';

const SideBarNav = () => (
      <nav className={styles.Nav}>
        <div>|</div>
        <p>About Me</p>
        <div>|</div>
        <p>Projects</p>
        <div>|</div>
        <p>Tech Stack</p>
        <div>|</div>
        <p>Contact Me</p>
        <div>|</div>
      </nav>
);

export default SideBarNav;
