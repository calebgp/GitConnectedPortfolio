import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from "react-i18next";

interface IFormInput {
    name: string;
    email: string;
    message: string;
}

const TEAL = '#03dac6';
const TEAL_DARK = '#00b3a4';

const fieldSx = {
    '& .MuiOutlinedInput-root': {
        color: 'rgba(255,255,255,0.87)',
        backgroundColor: '#111',
        borderRadius: 1.5,
        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.25)' },
        '&.Mui-focused fieldset': { borderColor: TEAL },
    },
    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.4)' },
    '& .MuiInputLabel-root.Mui-focused': { color: TEAL },
    '& .MuiFormHelperText-root': { color: '#f87171' },
};

const ContactForm: React.FC = () => {
    const [state, handleSubmitFormspree] = useFormspree('mnnzbrow');
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        handleSubmitFormspree({ ...data });
    };

    if (state.succeeded) {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                py: 6,
                px: 3,
                backgroundColor: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 2,
                textAlign: 'center',
            }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 52, color: TEAL }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>
                    {t("contactMe.messageSent.title")}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)', maxWidth: 320 }}>
                    {t("contactMe.messageSent.description")}
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{
            backgroundColor: '#111',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 2,
            p: { xs: 2.5, sm: 3 },
        }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'rgba(255,255,255,0.9)' }}>
                {t("contactMe.form.title")}
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <TextField
                    label={t("contactMe.form.name")}
                    variant="outlined"
                    size="small"
                    {...register('name', { required: t("contactMe.form.name") + ' *' })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    sx={fieldSx}
                />

                <TextField
                    label={t("contactMe.form.email")}
                    type="email"
                    variant="outlined"
                    size="small"
                    {...register('email', {
                        required: t("contactMe.form.email") + ' *',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={fieldSx}
                />

                <TextField
                    label={t("contactMe.form.message")}
                    variant="outlined"
                    multiline
                    rows={5}
                    {...register('message', { required: t("contactMe.form.message") + ' *' })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    sx={fieldSx}
                />

                <Button
                    type="submit"
                    variant="contained"
                    disabled={state.submitting}
                    endIcon={!state.submitting && <SendIcon sx={{ fontSize: '16px !important' }} />}
                    sx={{
                        py: 1.2,
                        backgroundColor: TEAL,
                        color: '#080808',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        borderRadius: 1.5,
                        '&:hover': { backgroundColor: TEAL_DARK },
                        '&:disabled': { backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' },
                    }}
                >
                    {state.submitting ? <CircularProgress size={22} sx={{ color: TEAL }} /> : t("contactMe.form.send")}
                </Button>
            </Box>
        </Box>
    );
};

export default ContactForm;