import React from 'react';
import { Skill } from '../../models/gc-profile';
import { Box, Typography, LinearProgress, Paper } from '@mui/material';

const SkillW: React.FC<{ skill: Skill }> = ({ skill }) => {
    const getProgressValue = (level: string) => {
        switch (level?.toLowerCase()) {
            case 'advanced': return 90;
            case 'intermediate': return 65;
            case 'basic': return 30;
            default: return 0;
        }
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
                    value={getProgressValue(skill.level)}
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