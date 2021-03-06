import React from 'react';

import styles from './AboutMe.css';

const AboutMe = () => (
    <>
    <div className={styles.AboutMe}>
        <h1>ABOUT ME </h1>
    </div>    
        <div className={styles.AboutMeContents}>
            <h2>BIO </h2>
            <div className={styles.BioContents}>
                    <p>Full-Stack Software Developer that serves code on a silver platter. As an experienced self-actualizer, expert ice breaker, and perceptive problem-solver; my goal is to bring readability, comfortability, and laughs to anyone in my community.</p>
                </div>
            <h3>CONTACT ME </h3>
            <div className={styles.ContactMeContents}>
                    <p>Phone: (503)-789-0553</p>
                    <p>Email: Kgali21@gmail.com</p>
                    <p>Linkedin: @kamran-g-ali</p>
                    <p>Beaverton, OR</p>
                </div>
        </div>        
    </>
)

export default AboutMe;