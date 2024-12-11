import React, {useContext} from 'react';
import styles from './ContactMe.module.css';
import {Box, Divider} from "@mui/material";
import {ProfileContext} from "../../main.tsx";
import Contacts from "../../components/Contacts";

const ContactMe: React.FC = () => {

    const profile = useContext(ProfileContext);
    return (
        <Box className={styles.container}>
            <Contacts basics={profile?.basics} />
            <Divider flexItem color={"#999999"} sx={{opacity: 0.6}}/>
        </Box>

    );
};

export default ContactMe;