import React from 'react';

import styles from './TechStack.css';

const TechStackCard = () => (
    <>
    <h1 className={styles.Title}>Tech Stack: </h1>
        <div className={styles.TechStack}>
            <div>
                <p>LANGUAGES</p>
                    <div className={styles.Lang}>
                        <p>Javascript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>
            </div>
            <div>
                <p className={styles.Front}>FRONT-END</p>
                    <div className={styles.FrontEnd}>
                        <p>React and React Hooks</p>
                        <p>Redux</p>
                    </div>
            </div>
            <div>
                <p>BACK-END</p>
                <div className={styles.BackEnd}>
                    <p>Node.js</p>
                    <p>Express</p>
                    <p>Mongoose</p>
                </div>
            </div>
            <div>
                <p>TOOLS</p>
                <div className={styles.Tools}>
                    <p>Github</p>
                    <p>Heroku</p>
                    <p>VScode</p>
                    <p>Postman</p>
                    <p>Socket.io</p>
                </div>
            </div>
            <div>
                <p>DATABASES</p>
                <div className={styles.Database}>
                    <p>MongoDB</p>
                    <p>PostgresQL</p>
                </div>
            </div>
            <div>
                <p>TESTING</p>
                <div className={styles.Testing}>
                    <p>Jest</p>
                    <p>QUnit</p>
                </div>
            </div>
        </div>
    </>
)

export default TechStackCard;
