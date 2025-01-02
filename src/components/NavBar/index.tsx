import styles from "./NavBar.module.css";
import MyLink from "../MyLink";

import { Profile } from "../../models/gc-profile";
import React from "react";
import Connection from "../Connection";

const NavBar: React.FC<{ profiles: Profile[] | undefined }> = ({
  profiles,
}) => {
  return (
    <div className={styles.topBar}>
      <nav className={styles.links}>
        <MyLink path="/" label="Home"></MyLink>
        <MyLink path="/projects" label="Projects"></MyLink>
        <MyLink path="/contact-me" label="Contact Me"></MyLink>
      </nav>
      <div className={styles.connections}>
        <Connection
          url={
            profiles?.find(
              (profile) => profile.network.toLowerCase().trim() === "github"
            )?.url ?? ""
          }
          path={"assets/github-mark-white.svg"}
        />
        <Connection
          url={
            profiles?.find(
              (profile) => profile.network.toLowerCase().trim() === "githu"
            )?.url ?? ""
          }
          path={"assets/github-mark-white.svg"}
        />
        <Connection
          url={
            profiles?.find(
              (profile) => profile.network.toLowerCase().trim() === "githu"
            )?.url ?? ""
          }
          path={"public/assets/github-mark-white.svg"}
        />
        <Connection
          url={
            profiles?.find(
              (profile) => profile.network.toLowerCase().trim() === "hackerrank"
            )?.url ?? ""
          }
          path={"assets/hackerrank.png"}
        />
        <Connection
          url={
            profiles?.find(
              (profile) =>
                profile.network.toLowerCase().trim() === "stack overflow"
            )?.url ?? ""
          }
          path={"assets/stackoverflow.png"}
        />
        <Connection
          url={
            profiles?.find(
              (profile) =>
                profile.network.toLowerCase().trim() === "gitconnected"
            )?.url ?? ""
          }
          path={"assets/gitconnected.png"}
        />
        <Connection
          url={
            profiles?.find(
              (profile) => profile.network.toLowerCase().trim() === "linkedin"
            )?.url ?? ""
          }
          path={"assets/linkedin-logo.png"}
        />
      </div>
    </div>
  );
};

export default NavBar;
