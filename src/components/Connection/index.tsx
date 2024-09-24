import styles from "./Connection.module.css";
import React from "react";

interface ConnectionProps {
    url: string;
    path: string;
}

const Connection: React.FC<ConnectionProps> = ({url, path}) => {
    if (url && path && url.length > 0 && path.length > 0) {
        return <a href={url}>
            <img className={styles.connection} src={path} alt={url}/>
        </a>
    }
    return <></>;
}
export default Connection;