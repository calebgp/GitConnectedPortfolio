import React from 'react';
import { Skill } from '../../models/gc-profile';
import { Box, Typography, LinearProgress } from '@mui/material';

const LEVEL_COLORS: Record<string, string> = {
    'Expert': '#03dac6',
    'Advanced': '#4CAF50',
    'Intermediate': '#FFC107',
    'Junior': '#FF9800',
    'Beginner': '#f44336',
};

const SkillW: React.FC<{ skill: Skill }> = ({ skill }) => {
    const pct = skill.rating ? Math.min((skill.rating / 5) * 100, 100) : 0;
    const color = LEVEL_COLORS[skill.level] ?? '#03dac6';

    return (
        <Box
            sx={{
                p: 2.5,
                width: '100%',
                backgroundColor: '#1a1a1a',
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.06)',
                textAlign: 'left',
                transition: 'all 0.25s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(3,218,198,0.3)',
                    boxShadow: '0 8px 20px rgba(3,218,198,0.1)',
                },
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                <Typography variant="body1" sx={{ fontWeight: 700, color: 'white' }}>
                    {skill.name}
                </Typography>
                {skill.level && (
                    <Typography variant="caption" sx={{ color, fontWeight: 700, fontSize: '0.75rem' }}>
                        {skill.level}
                    </Typography>
                )}
            </Box>

            <LinearProgress
                variant="determinate"
                value={pct}
                sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: color,
                        borderRadius: 3,
                    },
                }}
            />

            {skill.yearsOfExperience != null && skill.yearsOfExperience > 0 && (
                <Typography variant="caption" sx={{ color: '#777', mt: 0.5, display: 'block' }}>
                    {skill.yearsOfExperience} yrs
                </Typography>
            )}
        </Box>
    );
};

export default SkillW;