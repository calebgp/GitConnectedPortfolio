import styles from "./NavBar.module.css";
import MyLink from "../MyLink";

import { Profile } from "../../models/gc-profile";
import React from "react";
import Connection from "../Connection";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const NavBar: React.FC<{ profiles: Profile[] | undefined }> = ({
  profiles,
}) => {
  const { t } = useTranslation();

  // Função para trocar idioma
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={styles.topBar}>
      <nav className={styles.links}>
        <MyLink path="/" label={t("home")}></MyLink>
        <MyLink path="/projects" label={t("projects.title")}></MyLink>
        <MyLink path="/contact-me" label={t("contactMe.title")}></MyLink>
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
        <div className={styles.languagePicker}>
            <select onChange={handleLanguageChange} value={i18n.language}>
                <option value="pt">🇧🇷 Português</option>
                <option value="en">🇺🇸 English</option>
            </select>
        </div>
    </div>
  );
};

export default NavBar;
