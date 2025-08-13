import React from 'react';
import { Skill } from '../../models/gc-profile';
import { Box, Typography, LinearProgress, Paper } from '@mui/material';

const SkillW: React.FC<{ skill: Skill }> = ({ skill }) => {
    const getProgressValue = (level: number) => {
        if (level < 1) return 0;
        if (level >= 10) return 100;
        return (level / 5) * 100;
    };

    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                width: 200,
                textAlign: 'center',
                backgroundColor: '#202020',
                color: 'white',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 4px 10px rgba(0, 218, 198, 0.5)',
                }
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {skill.name}
            </Typography>
            <Box sx={{ width: '100%', mt: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={getProgressValue(skill.rating)}
                    sx={{
                        height: 8,
                        borderRadius: 5,
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#03dac6',
                        }
                    }}
                />
            </Box>
            <Typography variant="caption" sx={{ color: '#b0b0b0', mt: 1, display: 'block' }}>
                {skill.level}
            </Typography>

        </Paper>
    );
};

export default SkillW;