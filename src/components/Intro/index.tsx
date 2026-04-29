import Skeleton from "react-loading-skeleton";
import { Basics } from "../../models/gc-profile";
import styles from "./Intro.module.css";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function getInitials(name: string | undefined): string {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getFirstAndLastName(fullName: string | undefined): string {
    if (!fullName) return '';
    const parts = fullName.split(' ');
    return parts.length === 1 ? parts[0] : `${parts[0]} ${parts[parts.length - 1]}`;
}

const Intro: React.FC<{ basics: Basics | undefined }> = ({ basics }) => {
    return (
        <div className={styles.hero}>
            <div className={styles.avatarWrapper}>
                {basics?.image ? (
                    <img className={styles.avatar} src={basics.image} alt={basics.name} />
                ) : (
                    <div className={styles.avatarFallback}>
                        {basics ? getInitials(basics.name) : <Skeleton circle width={140} height={140} />}
                    </div>
                )}
                <div className={styles.avatarRing} />
            </div>

            <div className={styles.heroContent}>
                <h1 className={styles.name}>
                    {basics ? getFirstAndLastName(basics.name).toUpperCase() : <Skeleton width={300} height={50} />}
                </h1>
                <p className={styles.label}>
                    {basics?.label || <Skeleton width={200} />}
                </p>
                {basics?.locationAsString && (
                    <p className={styles.location}>
                        <LocationOnIcon sx={{ fontSize: '1rem', verticalAlign: 'middle' }} />
                        {basics.locationAsString}
                    </p>
                )}
                <p className={styles.summary}>
                    {basics?.summary || <Skeleton count={3} />}
                </p>
                {basics?.profiles && basics.profiles.length > 0 && (
                    <div className={styles.socialLinks}>
                        {basics.profiles.map((profile) => (
                            <a
                                key={profile.network}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                {profile.network}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Intro;