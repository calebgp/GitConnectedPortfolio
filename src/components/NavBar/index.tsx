import styles from './NavBar.module.css'
import MyLink from "../MyLink";

import {Profile} from "../../models/gc-profile";
import React from "react";
import Connection from "../Connection";

const NavBar: React.FC<{ profiles: Profile[] | undefined }> = ({profiles}) => {

    return (
        <div className={styles.topBar}>
            <nav className={styles.links}>
                <MyLink path="/" label="Home"></MyLink>
                <MyLink path="/projects" label="Projects"></MyLink>
                <MyLink path="/skills" label="Skills"></MyLink>
                <MyLink path="/about-me" label="About Me"></MyLink>
            </nav>
            <div className={styles.connections}>
                <Connection
                    url={profiles?.find(profile => profile.network.toLowerCase().trim() === "github")?.url ?? ""}
                    path={"src/assets/github-mark-white.svg"}
                />
                <Connection
                    url={profiles?.find(profile => profile.network.toLowerCase().trim() === "githu")?.url ?? ""}
                    path={"src/assets/github-mark-white.svg"}
                />
                <Connection
                    url={profiles?.find(profile => profile.network.toLowerCase().trim() === "githu")?.url ?? ""}
                    path={"src/assets/github-mark-white.svg"}
                />
                <Connection
                    url={profiles?.find(profile => profile.network.toLowerCase().trim() === "hackerrank")?.url ?? ""}
                    path={"src/assets/hackerrank.png"}
                />
                <Connection
                    url={profiles?.find(profile => profile.network.toLowerCase().trim() === "stack overflow")?.url ?? ""}
                    path={"src/assets/stackoverflow.png"}
                />
                <Connection
                    url={profiles?.find(profile => profile.network.toLowerCase().trim() === "gitconnected")?.url ?? ""}
                    path={"src/assets/gitconnected.png"}
                />
                <Connection
                    url={profiles?.find(profile => profile.network.toLowerCase().trim() === "linkedin")?.url ?? ""}
                    path={"src/assets/linkedin-logo.png"}
                />
            </div>
        </div>
    );
};


export default NavBar