import React, { useContext } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ProfileContext } from "../../main.tsx";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";
import {useTranslation} from "react-i18next"; // Novo componente

const ContactMe: React.FC = () => {
    const profile = useContext(ProfileContext);
    const {t} = useTranslation();
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            py: 5,
            px: 2
        }}>
            <Typography variant="body1" sx={{ color: '#b0b0b0', maxWidth: '600px', textAlign: 'center' }}>
                {t("contactMe.description")}
            </Typography>

            {/* Componente de informações de contato melhorado */}
            <ContactInfo basics={profile?.basics} />

            <Divider sx={{ width: '50%', my: 3, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

            {/* O novo formulário de contato! */}
            <ContactForm />

        </Box>
    );
};

export default ContactMe;