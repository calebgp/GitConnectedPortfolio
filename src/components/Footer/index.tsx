import React, { useContext } from 'react';
import styles from './Footer.module.css';
import { ProfileContext } from '../../main';

const Footer: React.FC = () => {
    const profile = useContext(ProfileContext);
    const year = new Date().getFullYear();
    const name = profile?.basics?.name?.split(' ')[0] ?? 'Caleb';

    return (
        <footer className={styles.footer}>
            <p className={styles.built}>
                Built with <span className={styles.heart}>♥</span> using React + GitConnected API
            </p>
            <p className={styles.copyright}>
                © {year} {name} — All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
