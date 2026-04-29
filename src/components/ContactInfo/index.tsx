import React from "react";
import { Basics } from "../../models/gc-profile";
import { Box, Typography, Link, Skeleton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from "react-i18next";

const TEAL = '#03dac6';

const networkIcon = (network: string) => {
    const n = network.toLowerCase();
    if (n === 'github') return <GitHubIcon fontSize="small" />;
    if (n === 'linkedin') return <LinkedInIcon fontSize="small" />;
    if (n === 'twitter' || n === 'x') return <TwitterIcon fontSize="small" />;
    return <LanguageIcon fontSize="small" />;
};

const ContactInfoRow: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1.5, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Box sx={{
            width: 36, height: 36,
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: `${TEAL}12`,
            color: TEAL,
            flexShrink: 0,
        }}>
            {icon}
        </Box>
        <Box sx={{ minWidth: 0 }}>{children}</Box>
    </Box>
);

const ContactInfo: React.FC<{ basics: Basics | undefined }> = ({ basics }) => {
    const { t } = useTranslation();

    if (!basics) {
        return <Skeleton width="100%" height={280} />;
    }

    const socialProfiles = basics.profiles ?? [];

    return (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, color: 'rgba(255,255,255,0.9)' }}>
                {t("contactMe.getInTouch")}
            </Typography>

            <Box sx={{
                backgroundColor: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 2,
                px: 2.5,
                py: 1,
                mb: 3,
            }}>
                {basics.email && (
                    <ContactInfoRow icon={<EmailIcon fontSize="small" />}>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)', display: 'block', lineHeight: 1 }}>
                            Email
                        </Typography>
                        <Link href={`mailto:${basics.email}`} sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', textDecoration: 'none', '&:hover': { color: TEAL } }}>
                            {basics.email}
                        </Link>
                    </ContactInfoRow>
                )}
                {basics.phone && (
                    <ContactInfoRow icon={<PhoneIcon fontSize="small" />}>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)', display: 'block', lineHeight: 1 }}>
                            {t("contactMe.phone")}
                        </Typography>
                        <Link href={`tel:${basics.phone}`} sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', textDecoration: 'none', '&:hover': { color: TEAL } }}>
                            {basics.phone}
                        </Link>
                    </ContactInfoRow>
                )}
                {basics.locationAsString && (
                    <ContactInfoRow icon={<LocationOnIcon fontSize="small" />}>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)', display: 'block', lineHeight: 1 }}>
                            {t("contactMe.location")}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem' }}>
                            {basics.locationAsString}
                        </Typography>
                    </ContactInfoRow>
                )}
            </Box>

            {socialProfiles.length > 0 && (
                <>
                    <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.4)', mb: 1.5, letterSpacing: '0.5px', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                        {t("contactMe.findMeOn")}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {socialProfiles.map((profile) => (
                            <Link
                                key={profile.network}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    px: 2,
                                    py: 1.2,
                                    borderRadius: 1.5,
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    backgroundColor: '#111',
                                    color: 'rgba(255,255,255,0.7)',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        borderColor: `${TEAL}40`,
                                        color: TEAL,
                                        backgroundColor: `${TEAL}08`,
                                    },
                                }}
                            >
                                <Box sx={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                                    {networkIcon(profile.network)}
                                </Box>
                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.2 }}>
                                        {profile.network}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem' }}>
                                        @{profile.username}
                                    </Typography>
                                </Box>
                            </Link>
                        ))}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ContactInfo;