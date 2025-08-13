import React from 'react';
import { Certificate } from '../../models/gc-profile';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import {useTranslation} from "react-i18next";

interface CertificatesProps {
    certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
    const { t } = useTranslation();
    if (!certificates || certificates.length === 0) {
        return null;
    }


    return (
        <Box sx={{ width: '100%', my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom align="center">
                {t("certificates.title")}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                {certificates.map((cert, index) => (
                    <Card key={index} sx={{
                        width: { xs: '90%', sm: '80%', md: '70%' },
                        backgroundColor: '#2d2d2d',
                        color: 'white',
                        textAlign: 'left'
                    }}>
                        <CardContent>
                            <Typography variant="h6">{cert.name}</Typography>
                            <Typography sx={{ mb: 1, color: '#b0b0b0' }}>{t("certificates.issuedBy")}: {cert.issuer}</Typography>
                            <Button
                                variant="outlined"
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: '#03dac6', borderColor: '#03dac6' }}
                            >
                                {t("certificates.viewCertificate")}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Certificates;