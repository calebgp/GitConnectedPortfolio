import React, { useContext } from 'react';
import styles from './Projects.module.css';
import ProjectW from '../../components/Project';
import { ProfileContext } from '../../main';

const Projects: React.FC = () => {
  const profile = useContext(ProfileContext);
  return (
    <div className={styles.container}>
        {profile?.projects.map((project, index) => (
          <ProjectW key={index} project={project} />
        ))}
    </div >
  );
};

export default Projects;
