import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import {useTranslation} from "react-i18next";

interface IFormInput {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    // Lembre-se de substituir 'xxxxxxxx' pelo seu ID do Formspree!
    const [state, handleSubmitFormspree] = useFormspree('mnnzbrow');
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        handleSubmitFormspree({ ...data });
    };

    if (state.succeeded) {
        return (
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: '#03dac6' }}>{t("contactMe.messageSent.title")}</Typography>
                <Typography sx={{ color: 'white' }}>{t("contactMe.messageSent.description")}</Typography>
            </Box>
        );
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: { xs: '95%', sm: '80%', md: '600px' },
            }}
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                {t("contactMe.form.title")}
            </Typography>

            <TextField
                label={t("contactMe.form.name")}
                variant="filled"
                {...register('name', { required: 'O nome é obrigatório' })}
                error={!!errors.name}
                helperText={errors.name?.message}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white', backgroundColor: '#2d2d2d' } }}
            />

            <TextField
                label={t("contactMe.form.email")}
                type="email"
                variant="filled"
                {...register('email', {
                    required: 'O email é obrigatório',
                    pattern: { value: /^\S+@\S+$/i, message: 'Formato de email inválido' }
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white', backgroundColor: '#2d2d2d' } }}
            />

            <TextField
                label={t("contactMe.form.message")}
                variant="filled"
                multiline
                rows={4}
                {...register('message', { required: 'A mensagem não pode estar em branco' })}
                error={!!errors.message}
                helperText={errors.message?.message}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white', backgroundColor: '#2d2d2d' } }}
            />

            <Button
                type="submit"
                variant="contained"
                disabled={state.submitting}
                sx={{
                    py: 1.5,
                    backgroundColor: '#03dac6',
                    color: 'black',
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: 'white',
                    }
                }}
            >
                {state.submitting ? <CircularProgress size={24} color="inherit" /> : t("contactMe.form.send")}
            </Button>
        </Box>
    );
};

export default ContactForm;