import { NavLink } from "react-router-dom";
import styles from './MyLink.module.css'

interface MyLinkProps {
    path: string;
    label: string
}

const MyLink: React.FC<MyLinkProps> = ({ path, label }) => {
    return (
        <div className={styles.link}>
            <NavLink className={({ isActive }) =>
                isActive ? `${styles.active}` : ""
            } to={path}>{label}</NavLink>
        </div>
    );
};


export default MyLink;