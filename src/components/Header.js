import React from 'react';
import styles from './Header.css';
import SideBarNav from './SideBarNav';
const Header = () => (
  <>
    <header className={styles.HeaderComponent}>
      <div className={styles.Headers}>
        <h1 className={styles.Name}>Kamran Ali</h1>
        <h2 className={styles.Role}>Full-Stack Software Developer</h2>
      </div>
      <SideBarNav />
    </header>
  </>
);

export default Header;
