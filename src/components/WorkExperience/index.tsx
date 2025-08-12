import React from 'react';
import { Work } from '../../models/gc-profile';
import { Box, Card, CardContent, Typography, Chip, Link } from '@mui/material';
import {useTranslation} from "react-i18next";

interface WorkExperienceProps {
    work: Work[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ work }) => {
    if (!work || work.length === 0) {
        return null;
    }
    const { t } = useTranslation();


    return (

        <Box sx={{
            width: '100%',
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: 2,
        }}>
            <Typography variant="h4" component="h2" gutterBottom align="center">
                {t("workExperience")}
            </Typography>

            {work.map((job, index) => (
                // Aplicamos a largura responsiva diretamente no Card
                <Card key={index} sx={{
                    width: { xs: '90%', sm: '90%', md: '75%' }, // Largura responsiva
                    maxWidth: '800px', // Uma largura máxima para telas muito grandes
                    mb: 3,
                    backgroundColor: '#2d2d2d',
                    color: 'white',
                    textAlign: 'left',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.02)'
                    }
                }}>
                    <CardContent>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                            {job.position}
                        </Typography>
                        <Link href={job.url} target="_blank" rel="noopener noreferrer" sx={{ color: '#03dac6', display: 'block', mb: 1, fontWeight: 500 }}>
                            {job.name}
                        </Link>
                        <Typography variant="body2" sx={{ my: 2, color: '#b0b0b0' }}>
                            {job.summary}
                        </Typography>
                        <Box>
                            {job.highlights.map((highlight, i) => (
                                <Chip key={i} label={highlight} sx={{ mr: 1, mb: 1, backgroundColor: '#424242', color: 'white' }} />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default WorkExperience;