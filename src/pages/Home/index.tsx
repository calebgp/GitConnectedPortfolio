import React, { useContext } from 'react';
import styles from './Home.module.css';
import Intro from '../../components/Intro';
import { ProfileContext } from '../../main';
import { Box, Divider } from '@mui/material';
import Skills from '../Skills';
import WorkExperience from '../../components/WorkExperience';
import Certificates from '../../components/Certificates';
import Skeleton from 'react-loading-skeleton';



const Home: React.FC = () => {
    const profile = useContext(ProfileContext);

    if (!profile) {
        return (
            <Box className={styles.container} sx={{p: 3}}>
                <Skeleton circle width={150} height={150} />
                <Skeleton height={40} width="60%" style={{marginTop: '20px'}} />
                <Skeleton count={3} width="80%" />
                <HomeDivider />
                <Skeleton height={200} width="90%" />
            </Box>
        )
    }

    return (
        <Box
            className={styles.container}
            sx={{
                width: '100%',
                px: { xs: 1, sm: 2, md: 4 },
                boxSizing: 'border-box',
                maxWidth: { xs: '100vw', sm: '100%', md: '1200px' },
                margin: '0 auto',
            }}
        >
            <Intro basics={profile.basics} />
            <HomeDivider />
            <Skills />
            <HomeDivider />
            {/* Seção de Experiência Profissional */}
            <WorkExperience work={profile.work} />
            {/* Seção de Certificados */}
            <Certificates certificates={profile.certificates} />
        </Box>
    );
};

function HomeDivider() {
    return (
        <Divider
            sx={{
                width: { xs: '80%', sm: '60%', md: '50%' },
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                my: 5,
                height: '1px',
            }}
        />
    )
}

export default Home;