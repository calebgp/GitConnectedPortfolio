import React from "react";
import styles from './NavBar.module.css'
import MyLink from "../MyLink";
const NavBar: React.FC = () => (
    <div className={styles.topbar}>
        <nav className={styles.links}>
            <MyLink path="/" label="Home"></MyLink>
            <MyLink path="/about-me" label="About Me"></MyLink>
            <MyLink path="/skills" label="Skills"></MyLink>
        </nav>
    </div>
);

export default NavBar