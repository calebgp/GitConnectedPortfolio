import React, {useContext} from 'react';
import styles from './Home.module.css';

import Intro from '../../components/Intro';
import {ProfileContext} from '../../main';
import {Box, Divider} from '@mui/material';
import Skills from '../Skills';

const Home: React.FC = () => {
    const profile = useContext(ProfileContext);
    return (
        <Box className={styles.container}>
            <Intro basics={profile?.basics}/>
            <HomeDivider/>
            <Skills/>
        </Box>

    );
};

function HomeDivider() {
    return (
        <Divider
            sx={{
                width: {xs: '80%', sm: '60%', md: '50%'}, // Responsive width
                backgroundColor: 'white',
                my: 3,
                height: '1px',
            }}
        />
    )
}

export default Home;
