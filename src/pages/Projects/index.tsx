import React, { useContext } from 'react';
import styles from './Projects.module.css';
import ProjectW from '../../components/Project';
import { ProfileContext } from '../../main';
import Grid2 from '@mui/material/Grid2';

const Projects: React.FC = () => {
  const profile = useContext(ProfileContext);
  return (
    <div className={styles.container}>
      <Grid2 container spacing={4}>
        {profile?.projects.map((project, index) => (
          <Grid2 item xs={4} key={index}>
            <ProjectW project={project} />
          </Grid2>
        ))}
      </Grid2>
    </div>

  );
};

export default Projects;
