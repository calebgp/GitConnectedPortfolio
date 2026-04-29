import React, { useContext } from 'react';
import { ProfileContext } from '../../main';
import ProjectW from '../../components/Project';
import { Box, Grid, Grow, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
    const profile = useContext(ProfileContext);
    const { t } = useTranslation();

    return (
        <Box sx={{
            width: '100%',
            px: { xs: 1, sm: 2, md: 4 },
            py: 4,
            boxSizing: 'border-box',
            maxWidth: { xs: '100vw', sm: '100%', md: '1200px' },
            margin: '0 auto',
        }}>
            <Typography variant="h4" component="h1" align="center" sx={{ fontWeight: 700, mb: 4 }}>
                {t("projects.title")}
            </Typography>

            <Grid container spacing={3} alignItems="stretch">
                {profile?.projects.map((project, index) => (
                    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 400 + index * 100 }} key={project.name}>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{
                                width: '100%',
                                maxWidth: { xs: 360, sm: 380, md: 400 },
                                minWidth: 0,
                                boxSizing: 'border-box',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'stretch',
                            }}>
                                <ProjectW project={project} />
                            </Box>
                        </Grid>
                    </Grow>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;