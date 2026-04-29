import React from "react";
import { Project } from "../../models/gc-profile";
import ImageGallery from "../ImageGallery";
import { Card, CardContent, Typography, Box, Chip, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslation } from "react-i18next";

const TEAL = '#03dac6';
const TEAL_DARK = '#00b3a4';

// Subtle muted chip colors that complement the teal palette
const LANG_CHIP_COLORS: Record<string, string> = {
    'TypeScript': '#5b9bd5',
    'JavaScript': '#c8a84b',
    'Python': '#5ba3c9',
    'Dart': '#4b9ec9',
    'Vue': '#5bb385',
    'Go': '#4bbfc9',
    'Golang': '#4bbfc9',
    'C++': '#5b8ab5',
    'C#': '#8b6fc9',
    'Kotlin': '#8f7fd6',
    'Swift': '#d4845a',
    'Ruby': '#b85555',
    'Rust': '#c49a78',
    'Java': '#a08040',
    'PHP': '#7b80a8',
    'Shell': '#7ab855',
    'Flutter': '#4b9ec9',
    'React': '#5bcad6',
    '.NET MAUI': '#8b6fc9',
    'GraphQL': '#c44da0',
};

const ProjectW: React.FC<{ project: Project }> = ({ project }) => {
    const { t } = useTranslation();

    const hasImages = project.images && Object.keys(project.images).length > 0;
    const name = project.displayName || project.name;
    const initial = name?.[0]?.toUpperCase() ?? '?';
    const primaryTech = project.primaryLanguage || project.libraries?.[0] || project.languages?.[0];

    return (
        <Card sx={{
            width: '100%',
            backgroundColor: '#111',
            color: 'white',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
            transition: 'all 0.25s ease',
            height: '100%',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 12px 32px ${TEAL}22`,
                borderColor: `${TEAL}40`,
            },
        }}>
            {/* Teal accent strip — consistent with site palette */}
            <Box sx={{
                height: 2,
                background: `linear-gradient(90deg, ${TEAL}, ${TEAL_DARK}88)`,
                flexShrink: 0,
            }} />

            {/* Image area or placeholder */}
            {hasImages ? (
                <Box sx={{ width: '100%', maxHeight: 165, overflow: 'hidden' }}>
                    <ImageGallery images={project.images} />
                </Box>
            ) : (
                <Box sx={{
                    width: '100%',
                    height: 140,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #161616 0%, #1a1a1a 100%)',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}>
                    {/* Decorative oversized initial */}
                    <Typography sx={{
                        position: 'absolute',
                        right: -8,
                        bottom: -24,
                        fontSize: '9rem',
                        fontWeight: 900,
                        color: TEAL,
                        opacity: 0.05,
                        lineHeight: 1,
                        userSelect: 'none',
                        fontFamily: 'monospace',
                        pointerEvents: 'none',
                    }}>
                        {initial}
                    </Typography>

                    {/* Centered badge */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, zIndex: 1 }}>
                        <Box sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `${TEAL}14`,
                            border: `1.5px solid ${TEAL}35`,
                            fontSize: '1.4rem',
                            fontWeight: 800,
                            color: TEAL,
                            fontFamily: 'monospace',
                        }}>
                            {initial}
                        </Box>
                        {primaryTech && (
                            <Box sx={{
                                px: 1.5,
                                py: 0.3,
                                borderRadius: '20px',
                                border: `1px solid ${TEAL}30`,
                                backgroundColor: `${TEAL}0a`,
                                fontSize: '0.68rem',
                                fontWeight: 600,
                                color: `${TEAL}cc`,
                                letterSpacing: '0.6px',
                                textTransform: 'uppercase',
                            }}>
                                {primaryTech}
                            </Box>
                        )}
                    </Box>
                </Box>
            )}

            {/* Card content */}
            <CardContent sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.3 }}>
                    {name}
                </Typography>

                {project.summary && (
                    <Typography variant="body2" sx={{
                        color: 'rgba(255,255,255,0.45)',
                        lineHeight: 1.65,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        flex: 1,
                        fontSize: '0.82rem',
                    }}>
                        {project.summary}
                    </Typography>
                )}

                {/* Tech chips */}
                {((project.languages?.length ?? 0) > 0 || (project.libraries?.length ?? 0) > 0) && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto', pt: 0.5 }}>
                        {project.languages?.map((lang) => (
                            <Chip key={lang} label={lang} size="small" sx={{
                                backgroundColor: `${LANG_CHIP_COLORS[lang] ?? TEAL}14`,
                                color: LANG_CHIP_COLORS[lang] ?? TEAL,
                                border: `1px solid ${LANG_CHIP_COLORS[lang] ?? TEAL}30`,
                                fontWeight: 600,
                                fontSize: '0.65rem',
                                height: 20,
                            }} />
                        ))}
                        {project.libraries?.map((lib) => (
                            <Chip key={lib} label={lib} size="small" sx={{
                                backgroundColor: 'rgba(255,255,255,0.04)',
                                color: 'rgba(255,255,255,0.4)',
                                border: '1px solid rgba(255,255,255,0.07)',
                                fontSize: '0.65rem',
                                height: 20,
                            }} />
                        ))}
                    </Box>
                )}

                {/* Action buttons */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', pt: 0.5 }}>
                    {project.url && (
                        <Button
                            variant="contained"
                            size="small"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<OpenInNewIcon sx={{ fontSize: '13px !important' }} />}
                            sx={{
                                backgroundColor: TEAL,
                                color: '#080808',
                                fontWeight: 700,
                                fontSize: '0.73rem',
                                flex: 1,
                                minWidth: 0,
                                py: 0.5,
                                borderRadius: 1.5,
                                '&:hover': { backgroundColor: TEAL_DARK },
                            }}
                        >
                            {t("projects.viewProject")}
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button
                            variant="outlined"
                            size="small"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<GitHubIcon sx={{ fontSize: '15px !important' }} />}
                            sx={{
                                color: 'rgba(255,255,255,0.45)',
                                borderColor: 'rgba(255,255,255,0.1)',
                                fontWeight: 600,
                                fontSize: '0.73rem',
                                flex: project.url ? 'none' : 1,
                                py: 0.5,
                                borderRadius: 1.5,
                                '&:hover': {
                                    borderColor: TEAL,
                                    color: TEAL,
                                    backgroundColor: `${TEAL}08`,
                                },
                            }}
                        >
                            GitHub
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProjectW;