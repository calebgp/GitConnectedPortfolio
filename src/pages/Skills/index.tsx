import React, { useContext } from 'react';
import styles from './Skills.module.css';
import { ProfileContext } from '../../main';
import SkillW from '../../components/Skill';
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

const Skills: React.FC = () => {
    const profile = useContext(ProfileContext);
    const { t } = useTranslation();

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 700, mb: 3 }}>
                {t("skills")}
            </Typography>
            <div className={styles.container}>
                {profile?.skills.map((skill, index) => (
                    <SkillW key={index} skill={skill} />
                ))}
            </div>
        </Box>
    );
};

export default Skills;
