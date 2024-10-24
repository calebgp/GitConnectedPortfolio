import Skeleton from "react-loading-skeleton";
import { Basics, } from "../../models/gc-profile";
import styles from "./Intro.module.css";
import React from "react";

const Intro: React.FC<{ basics: Basics | undefined; }> = ({ basics }) => {

    return (
        <div className={styles.intro}>
            <img className={styles.myImage} src={basics?.image} alt="My photo"/>
            <div className={styles.introText}>
                <h1>{getFirstAndLastName(basics?.name)?.toUpperCase() || <Skeleton/>}</h1>
                <p>{basics?.label || <Skeleton/>}</p>
                <p>{basics?.headline || <Skeleton/>}</p>
                <p>{basics?.summary || <Skeleton count={2}/>}</p>

            </div>

        </div>
    );
};
function getFirstAndLastName(fullName: string | undefined): string | undefined {
    if (!fullName) {
        return "";
    }
  const nameParts = fullName.split(' ');

  // Return the first and last names
  if (nameParts.length === 1) {
    return nameParts[0]; // In case there is only one name
  } else {
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
  }
}

export default Intro;