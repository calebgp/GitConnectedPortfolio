import React from 'react';
import styles from './Skill.module.css';
import { Skill } from '../../models/gc-profile';

const SkillW: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
        <div className={styles.skillContainer}>
            <div className={styles.skillName}>
                {skill.name}
            </div>
            <div className={styles.skillLevel}>
                {skill.level}
            </div>
            <div className={styles.skillExp}>
                {skill.yearsOfExperience} years of experience
            </div>
        </div>
    );
};

export default SkillW;
