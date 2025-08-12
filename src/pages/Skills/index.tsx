import React, {useContext} from 'react';
import styles from './Skills.module.css';
import {ProfileContext} from '../../main';
import SkillW from '../../components/Skill';
import {useTranslation} from "react-i18next";

const Skills: React.FC = () => {
    const profile = useContext(ProfileContext);
    const { t } = useTranslation();

    return (
        <>
            <h1>{t("skills")}</h1>
            <div className={styles.container}>

                {profile?.skills.map((skill, index) => (
                    <SkillW key={index} skill={skill}/>
                ))}
            </div>
        </>

    );
};
export default Skills;
