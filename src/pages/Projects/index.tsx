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
            px: { xs: 2, sm: 3, md: 4 },
            py: 4,
            boxSizing: 'border-box',
            maxWidth: 1200,
            margin: '0 auto',
        }}>
            <Typography variant="h4" component="h1" align="center" sx={{ fontWeight: 700, mb: 4 }}>
                {t("projects.title")}
            </Typography>

            <Grid container spacing={2.5} alignItems="stretch">
                {profile?.projects
                    .slice()
                    .sort((a, b) => {
                        const aTime = (a.start.year ?? 0) * 10000 + (a.start.month ?? 0) * 100 + (a.start.day ?? 0);
                        const bTime = (b.start.year ?? 0) * 10000 + (b.start.month ?? 0) * 100 + (b.start.day ?? 0);
                        return bTime - aTime;
                    })
                    .map((project, index) => (
                    <Grow
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        timeout={300 + index * 80}
                        key={project.name}
                    >
                        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                            <ProjectW project={project} />
                        </Grid>
                    </Grow>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;