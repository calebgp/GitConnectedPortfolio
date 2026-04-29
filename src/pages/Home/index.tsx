import React, { useContext } from 'react';
import styles from './Home.module.css';
import Intro from '../../components/Intro';
import { ProfileContext } from '../../main';
import { Box, Divider, Typography } from '@mui/material';
import Skills from '../Skills';
import WorkExperience from '../../components/WorkExperience';
import Certificates from '../../components/Certificates';
import Skeleton from 'react-loading-skeleton';
import CodeIcon from '@mui/icons-material/Code';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
    const profile = useContext(ProfileContext);
    const { t } = useTranslation();

    if (!profile) {
        return (
            <Box className={styles.container} sx={{ p: 3, alignItems: 'center' }}>
                <Skeleton circle width={160} height={160} />
                <Skeleton height={50} width="50%" style={{ marginTop: 20 }} />
                <Skeleton count={3} width="70%" />
                <HomeDivider />
                <Skeleton height={200} width="90%" />
            </Box>
        );
    }

    const oldestWorkYear = profile.work?.length > 0
        ? Math.min(...profile.work.map(w => w.start?.year ?? new Date().getFullYear()))
        : new Date().getFullYear();
    const yearsExp = new Date().getFullYear() - oldestWorkYear;

    const stats = [
        {
            icon: <BusinessCenterIcon sx={{ fontSize: 34, color: '#03dac6' }} />,
            value: `${yearsExp}+`,
            label: t('stats.yearsExp'),
        },
        {
            icon: <CodeIcon sx={{ fontSize: 34, color: '#03dac6' }} />,
            value: profile.projects?.length ?? 0,
            label: t('stats.projects'),
        },
        {
            icon: <StarIcon sx={{ fontSize: 34, color: '#03dac6' }} />,
            value: profile.skills?.length ?? 0,
            label: t('stats.skills'),
        },
    ];

    return (
        <Box className={styles.container}>
            <Intro basics={profile.basics} />

            <Box className={styles.statsRow}>
                {stats.map((stat, i) => (
                    <Box key={i} className={styles.statCard}>
                        {stat.icon}
                        <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
                            {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.82rem' }}>
                            {stat.label}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <HomeDivider />
            <Skills />
            <HomeDivider />
            <WorkExperience work={profile.work} />
            <Certificates certificates={profile.certificates} />
        </Box>
    );
};

function HomeDivider() {
    return (
        <Divider
            sx={{
                width: { xs: '80%', sm: '60%', md: '50%' },
                backgroundColor: 'rgba(3, 218, 198, 0.15)',
                my: 5,
                height: '1px',
            }}
        />
    );
}

export default Home;