import React, { useContext } from 'react';
import styles from './Home.module.css';

import Intro from '../../components/Intro';
import { ProfileContext } from '../../main';

const Home: React.FC = () => {
  const profile = useContext(ProfileContext);
  return (
    <div className={styles.container}>
      <Intro basics={profile?.basics} />
    </div >
  );
};

export default Home;
