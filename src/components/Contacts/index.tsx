import Skeleton from "react-loading-skeleton";
import { Basics } from "../../models/gc-profile";
import styles from "./Contacts.module.css";
import React from "react";

const Contacts: React.FC<{ basics: Basics | undefined }> = ({ basics }) => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contactsText}>
        {basics?.email || basics?.phone ? (
          <>
            {basics?.email && (
              <p>
                Email:{" "}
                <a href={`mailto:${basics.email}`}>
                  {basics.email || <Skeleton />}
                </a>
              </p>
            )}
            {basics?.phone && (
              <p>
                Phone:{" "}
                <a href={`tel:${basics.phone}`}>
                  {basics.phone || <Skeleton />}
                </a>
              </p>
            )}
          </>
        ) : (
          <p>No contacts configured</p>
        )}
      </div>
    </div>
  );
};

export default Contacts;
