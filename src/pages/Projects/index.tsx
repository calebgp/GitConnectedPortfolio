import React, { useContext } from 'react';
import { ProfileContext } from '../../main';
import ProjectW from '../../components/Project';
import { Box, Grid, Grow} from '@mui/material';

const Projects: React.FC = () => {
    const profile = useContext(ProfileContext);

    return (
        <Box sx={{
            width: '100%',
            px: { xs: 1, sm: 2, md: 4 },
            py: 3,
            boxSizing: 'border-box',
            maxWidth: { xs: '100vw', sm: '100%', md: '1200px' },
            margin: '0 auto',
        }}>

            <Grid container spacing={2} alignItems="stretch">
                {profile?.projects.map((project, index) => (
                    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 500 + index * 150 }} key={project.name}>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{
                                width: '100%',
                                maxWidth: { xs: 340, sm: 360, md: 380 },
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