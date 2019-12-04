import React from 'react';
import styles from './Header.css';

const Header = () => (
  <>
    <header className={styles.Header}>
      <h1 className={styles.Name}>Kamran Ali</h1>
      <h2 className={styles.Role}>Full-Stack Software Developer</h2>
      <nav className={styles.Nav}>
        <p>Home</p>
        <p>About Me</p>
        <p>Portfolio</p>
        <p>Contact Me</p>
      </nav>
    </header>
  </>
);

export default Header;
