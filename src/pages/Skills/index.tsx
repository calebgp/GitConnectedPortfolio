import React, {useContext} from 'react';
import styles from './Skills.module.css';
import {ProfileContext} from '../../main';
import SkillW from '../../components/Skill';

const Skills: React.FC = () => {
    const profile = useContext(ProfileContext);
    return (
        <>
            <h1>Skills</h1>
            <div className={styles.container}>

                {profile?.skills.map((skill, index) => (
                    <SkillW key={index} skill={skill}/>
                ))}
            </div>
        </>

    );
};
export default Skills;
