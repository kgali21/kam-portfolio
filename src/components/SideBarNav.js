import React from 'react';
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
  </>
);

export default SideBarNav;
