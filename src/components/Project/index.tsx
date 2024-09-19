import React from 'react';
import styles from './Project.module.css';
import { Project } from '../../models/gc-profile';
import Skeleton from 'react-loading-skeleton';



const ProjectW: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className={styles.project}>
      <img src={project.images[0].resolutions.thumbnail.url} alt={project.name} />
        <div>
            <h3>{project.displayName || <Skeleton/>}</h3>
            <p>{project.summary || <Skeleton count={2}/>}</p>
            <p>{project.description || <Skeleton count={8}/>}</p>
            <div className={styles.links}>
                <GitHub githubUrl={project.githubUrl}/>
                <ProjectUrl url={project.url}/>
            </div>
        </div>
    </div>
  );
};

function GitHub(props: { githubUrl: string | undefined; }) {
    if (props.githubUrl && props.githubUrl.length > 0) {
        return <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
        </a>
    }
}

function ProjectUrl(props: { url: string | undefined; }) {
  if (props.url && props.url.length > 0) {
    return <a href={props.url} target="_blank" rel="noopener noreferrer">
      Project Link
    </a>
  }
};

export default ProjectW;
