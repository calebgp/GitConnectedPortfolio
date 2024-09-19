import React, { useContext } from "react";
import styles from './NavBar.module.css'
import MyLink from "../MyLink";

import { Profile } from "../../models/gc-profile";
const NavBar: React.FC<{ profiles: Profile[] | undefined }> = ({ profiles }) => {

    return (
        <div className={styles.topbar}>
            <nav className={styles.links}>
                <MyLink path="/" label="Home"></MyLink>
                <MyLink path="/projects" label="Projects"></MyLink>
                <MyLink path="/skills" label="Skills"></MyLink>
                <MyLink path="/about-me" label="About Me"></MyLink>
            </nav>
            <div className={styles.connections}>
                <GitHub githubUrl={profiles?.find(profile => profile.network.toLowerCase() === "github")?.url} />
                <Linkedin linkedinUrl={profiles?.find(profile => profile.network.toLowerCase() === "linkedin")?.url} />
            </div>
        </div>
    );
};

function GitHub(props: { githubUrl: string | undefined; }) {
    if (props.githubUrl && props.githubUrl.length > 0) {
        return <a href={props.githubUrl}>
            <img className={styles.github} src="src/assets/github-mark-white.svg" alt="my github" />
        </a>
    }
}
function Linkedin(props: { linkedinUrl: string | undefined; }) {
    if (props.linkedinUrl && props.linkedinUrl.length > 0) {
        return <a href={props.linkedinUrl}>
            <img className={styles.github} src="src/assets/linkedin-logo.png" alt="my linkedin" />
        </a>
    }
}
export default NavBar