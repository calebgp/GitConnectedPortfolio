import React, { useContext } from 'react';
import styles from './Home.module.css';
import ProjectW from '../../components/Project';
import Intro from '../../components/Intro';
import { ProfileContext } from '../../main';

const Home: React.FC = () => {
  const profile = useContext(ProfileContext);
  return (
    <div className={styles.container}>
      <Intro basics={profile?.basics} />
      <div className={styles.projects}>
        {profile?.projects.map((project, index) => (
          <ProjectW key={index} project={project} />
        ))}
      </div>
    </div >
  );
};

export default Home;
