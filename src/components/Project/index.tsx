import React from 'react';
import styles from './Project.module.css';
import {Project} from '../../models/gc-profile';
import Skeleton from 'react-loading-skeleton';

import ImageGallery from "../ImageGallery";
import {Divider} from "@mui/material";


const ProjectW: React.FC<{ project: Project }> = ({project}) => {
    return (
        <div className={styles.project}>

            <div>
                <div className={styles.about}>
                    <h3>{project.displayName || <Skeleton/>}</h3>
                    <div className={styles.links}>
                        <GitHub githubUrl={project.githubUrl}/>
                        <ProjectUrl url={project.url}/>
                    </div>
                </div>
                <p>{project.summary || <Skeleton count={2}/>}</p>

            </div>
            <ImageGallery
                images={project.images}></ImageGallery>
            <div className={styles.preDivider}></div>
            <Divider flexItem color={"#999999"} sx={{opacity: 0.6}}/>

            <div className={styles.used}>
                <UsedLanguages project={project}/>
                <UsedLibraries project={project}/>
            </div>
            <p>{project.description}</p>

        </div>
    );
};

function UsedLanguages(props: { project: Project }) {

    if (props.project.languages == null || props.project.languages.length === 0) {
        return (
            <></>
        );
    }
    return (
        <>
            <br/>
            {
                props.project.languages.map((language, index) => (

                        <a key={index}>{language}</a>
                    )
                )
            }
        </>
    );

}

function UsedLibraries(props: { project: Project }) {

    if (props.project.libraries == null || props.project.libraries.length === 0) {
        return (
            <></>
        );
    }
    return (
        <>
            {
                props.project.libraries.map((library, index) => (
                    <a key={index}>{library}</a>
                ))
            }
        </>
    );

}


function GitHub(props: { githubUrl: string | undefined; }) {
    if (props.githubUrl && props.githubUrl.length > 0) {
        return <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/github-mark-white.svg" alt="Github"/>
        </a>
    }
}

function ProjectUrl(props: { url: string | undefined; }) {
    if (props.url && props.url.length > 0) {
        return <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/internet.svg" alt="Project Site"/>
        </a>
    }
};

export default ProjectW;
