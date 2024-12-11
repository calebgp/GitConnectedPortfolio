import Skeleton from "react-loading-skeleton";
import { Basics, } from "../../models/gc-profile";
import styles from "./Contacts.module.css";
import React from "react";

const Contacts: React.FC<{ basics: Basics | undefined; }> = ({ basics }) => {

    return (
        <div className={styles.contacts}>
            <div className={styles.contactsText}>
                <p >Email: <a href={`mailto:${basics?.email}`}>{basics?.email|| <Skeleton/>}</a></p>
            </div>

        </div>
    );
};


export default Contacts;