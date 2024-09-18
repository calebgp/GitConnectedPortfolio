import React from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Skills</h1>
            <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Git</li>
                <li>Docker</li>
            </ul>
        </div>
    );
};

export default Skills;
