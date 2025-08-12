import React from "react";
import { Basics } from "../../models/gc-profile";
import { Paper, Link, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Skeleton from "react-loading-skeleton";

const ContactInfo: React.FC<{ basics: Basics | undefined }> = ({ basics }) => {
    if (!basics) {
        return <Skeleton width={300} height={100} />;
    }

    return (
        <Paper elevation={3} sx={{
            p: 3,
            backgroundColor: '#2d2d2d',
            color: 'white',
            borderRadius: '15px',
            width: { xs: '85%', sm: '90%' }
        }}>
            <List>
                {basics.email && (
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon sx={{ color: '#03dac6' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Email"
                            secondary={
                                <Link href={`mailto:${basics.email}`} sx={{ color: 'white', textDecoration: 'none' }}>
                                    {basics.email}
                                </Link>
                            }
                            secondaryTypographyProps={{ color: 'white' }}
                        />
                    </ListItem>
                )}
                {basics.phone && (
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon sx={{ color: '#03dac6' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Telefone"
                            secondary={
                                <Link href={`tel:${basics.phone}`} sx={{ color: 'white', textDecoration: 'none' }}>
                                    {basics.phone}
                                </Link>
                            }
                            secondaryTypographyProps={{ color: 'white' }}
                        />
                    </ListItem>
                )}
            </List>
        </Paper>
    );
};

export default ContactInfo;