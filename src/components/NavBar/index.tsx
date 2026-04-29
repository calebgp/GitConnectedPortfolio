import styles from "./NavBar.module.css";
import MyLink from "../MyLink";
import { Profile } from "../../models/gc-profile";
import React, { useState, useEffect } from "react";
import Connection from "../Connection";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

const socialLinks = [
  { network: 'github', icon: 'assets/github-mark-white.svg' },
  { network: 'linkedin', icon: 'assets/linkedin-logo.png' },
  { network: 'gitconnected', icon: 'assets/gitconnected.png' },
  { network: 'hackerrank', icon: 'assets/hackerrank.png' },
  { network: 'stack overflow', icon: 'assets/stackoverflow.png' },
];

const NavBar: React.FC<{ profiles: Profile[] | undefined }> = ({ profiles }) => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.topBar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.brand}>
        <span className={styles.brandText}>{"<CP />"}</span>
      </div>

      <div className={`${styles.links} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <MyLink path="/" label={t("home")} />
        <MyLink path="/projects" label={t("projects.title")} />
        <MyLink path="/contact-me" label={t("contactMe.title")} />
      </div>

      <div className={styles.rightGroup}>
        <div className={styles.connections}>
          {socialLinks.map(({ network, icon }) => (
            <Connection
              key={network}
              url={profiles?.find(p => p.network.toLowerCase().trim() === network)?.url ?? ""}
              path={icon}
            />
          ))}
        </div>

        <div className={styles.languagePicker}>
          <select onChange={handleLanguageChange} value={i18n.language}>
            <option value="pt">🇧🇷 PT</option>
            <option value="en">🇺🇸 EN</option>
          </select>
        </div>

        <IconButton
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{ color: '#03dac6' }}
          size="small"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;
