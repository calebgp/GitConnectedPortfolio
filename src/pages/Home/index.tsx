import React, { useContext } from 'react';
import styles from './Home.module.css';

import Intro from '../../components/Intro';
import { ProfileContext } from '../../main';
import { Divider } from '@mui/material';
import Skills from '../Skills';

const Home: React.FC = () => {
  const profile = useContext(ProfileContext);
  return (
    <div className={styles.container}>
      <Intro basics={profile?.basics} />
      <Divider ></Divider>
      <Skills></Skills>
    </div >
  );
};

export default Home;
