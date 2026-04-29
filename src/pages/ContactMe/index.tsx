import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ProfileContext } from "../../main.tsx";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";
import { useTranslation } from "react-i18next";

const ContactMe: React.FC = () => {
    const profile = useContext(ProfileContext);
    const { t } = useTranslation();

    return (
        <Box sx={{
            width: '100%',
            maxWidth: 1000,
            margin: '0 auto',
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 4, md: 6 },
            boxSizing: 'border-box',
        }}>
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
                    {t("contactMe.title")}
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.45)', maxWidth: 480, mx: 'auto' }}>
                    {t("contactMe.description")}
                </Typography>
            </Box>

            {/* Two-column layout */}
            <Grid container spacing={4} alignItems="flex-start">
                <Grid item xs={12} md={5}>
                    <ContactInfo basics={profile?.basics} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <ContactForm />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactMe;