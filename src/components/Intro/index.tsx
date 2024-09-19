import Skeleton from "react-loading-skeleton";
import { Basics, } from "../../models/gc-profile";
import styles from "./Intro.module.css";

const Intro: React.FC<{ basics: Basics | undefined; }> = ({ basics }) => {
    return (
        <div className={styles.intro}>
            <img className={styles.myImage} src={basics?.image}/>
            <div className={styles.introText}>
                <h1>{basics?.name || <Skeleton/>}</h1>
                <p>{basics?.label || <Skeleton/>}</p>
                <p>{basics?.headline || <Skeleton/>}</p>
                <p>{basics?.summary || <Skeleton count={2}/>}</p>

            </div>

        </div>
    );
};
export default Intro;