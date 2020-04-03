import React from 'react';
import styles from './Header.css';
import SideBarNav from './SideBarNav';
const Header = () => (
  <>
    <header className={styles.Header}>
    <h1 className={styles.Name}>const SD = Kamran Ali</h1>
    <h2 className={styles.Role}>expect(Full-Stack Software Developer).toBe(SD)</h2>
    <SideBarNav />
    </header>
  </>
);

export default Header;
