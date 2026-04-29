import React from 'react';
import { Certificate } from '../../models/gc-profile';
import { Box, Typography, Button, Chip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslation } from "react-i18next";

interface CertificatesProps {
    certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
    const { t } = useTranslation();

    if (!certificates || certificates.length === 0) return null;

    return (
        <Box sx={{ width: '100%', my: 4 }}>
            <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 700, mb: 4 }}>
                {t("certificates.title")}
            </Typography>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: 2,
                maxWidth: 900,
                mx: 'auto',
                px: 2,
            }}>
                {certificates.map((cert, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundColor: '#1a1a1a',
                            borderRadius: 2,
                            p: 3,
                            border: '1px solid rgba(3,218,198,0.15)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1.5,
                            textAlign: 'center',
                            transition: 'all 0.25s',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                borderColor: '#03dac6',
                                boxShadow: '0 8px 24px rgba(3,218,198,0.12)',
                            },
                        }}
                    >
                        <EmojiEventsIcon sx={{ fontSize: 40, color: '#03dac6' }} />
                        <Typography sx={{ fontWeight: 700, color: 'white', fontSize: '0.95rem', lineHeight: 1.4 }}>
                            {cert.name}
                        </Typography>
                        <Chip
                            label={cert.issuer}
                            size="small"
                            sx={{ backgroundColor: 'rgba(3,218,198,0.1)', color: '#03dac6', fontWeight: 600 }}
                        />
                        {cert.date && (
                            <Typography variant="caption" sx={{ color: '#777' }}>
                                {cert.date}
                            </Typography>
                        )}
                        {cert.url && (
                            <Button
                                size="small"
                                variant="outlined"
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                                sx={{
                                    color: '#03dac6',
                                    borderColor: 'rgba(3,218,198,0.35)',
                                    fontSize: '0.78rem',
                                    mt: 'auto',
                                    '&:hover': { borderColor: '#03dac6', background: 'rgba(3,218,198,0.08)' },
                                }}
                            >
                                {t("certificates.viewCertificate")}
                            </Button>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Certificates;