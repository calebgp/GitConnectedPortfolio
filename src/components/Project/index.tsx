import React from "react";
import { Project } from "../../models/gc-profile";
import ImageGallery from "../ImageGallery";
import { Card, CardContent, Typography, Box, Chip, CardActions, Button } from "@mui/material";
import {useTranslation} from "react-i18next";


const ProjectW: React.FC<{ project: Project }> = ({ project }) => {
    const {t} = useTranslation();
    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: { xs: 320, sm: 340, md: 360 },
                minWidth: 0,
                backgroundColor: '#232323',
                color: 'white',
                boxShadow: 3,
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                p: 2,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 20px rgba(0, 218, 198, 0.3)',
                }
            }}
        >
            {/* Área de imagem do projeto */}
            {project.images && Object.keys(project.images).length > 0 ? (
                <Box
                    sx={{
                        width: '100%',
                        maxHeight: 160,
                        mb: 2,
                        borderRadius: 2,
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <ImageGallery images={project.images} />
                </Box>
            ) : (
                <Box
                    sx={{
                        width: '100%',
                        height: 120,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #222 60%, #03dac6 100%)',
                        borderRadius: 2,
                        mb: 2,
                    }}
                >
                    <Typography variant="subtitle2" sx={{ color: '#b0b0b0' }}>
                        {t("projects.noImage")}
                    </Typography>
                </Box>
            )}

            {/* Área de conteúdo principal */}
            <CardContent sx={{ p: 0, width: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>
                    {project.displayName || project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 2, textAlign: 'center', minHeight: '60px' }}>
                    {project.summary}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, width: '100%', justifyContent: 'center', mb: 2 }}>
                    {project.url && (
                        <Button
                            variant="outlined"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: '#03dac6',
                                borderColor: '#03dac6',
                                width: { xs: '100%', sm: 'auto' },
                                fontWeight: 600,
                            }}
                        >
                            {t("projects.viewProject")}
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button
                            variant="outlined"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<img src="/assets/github-mark-white.svg" alt="GitHub" style={{ width: 20, height: 20 }} />}
                            sx={{
                                color: '#03dac6',
                                borderColor: '#03dac6',
                                width: { xs: '100%', sm: 'auto' },
                                fontWeight: 600,
                            }}
                        >
                            {t("projects.viewCode")}
                        </Button>
                    )}
                </Box>
            </CardContent>

            {/* Ações/Tags do Card na parte inferior */}
            <CardActions sx={{ p: 2, pt: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
                    {t("projects.technologies")}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.languages?.map((lang) =>
                        <Chip key={lang} label={lang} size="small" sx={{backgroundColor: '#03dac6', color: 'black', fontWeight: 'bold'}} />
                    )}
                    {project.libraries?.map((lib) =>
                        <Chip key={lib} label={lib} size="small" sx={{backgroundColor: '#535353', color: 'white'}} />
                    )}
                </Box>
            </CardActions>
        </Card>
    );
};

export default ProjectW;