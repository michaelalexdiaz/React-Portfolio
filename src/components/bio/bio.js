import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import selfie from '../../assets/images/IMG_0591.jpg';

const bio = () => {
    return (
        <>
            <Grid container justifyContent="center" border="solid" padding={2} spacing={1}>
                <Grid item xs={4} md={2}>
                <Typography align="center">
                    <Avatar alt="Michael Diaz" src={selfie} sx={{width: 1, height: 1}}/>
                </Typography>
                </Grid>
            </Grid>
            <Grid 
            container spacing={0} 
            item xs={12} 
            md={12}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            border="solid"
            >
            <Typography align="center">
                <h1>Michael Diaz</h1>
            </Typography>
            <Typography align="center">
                <p>A Full-Stack Web developer, Michael has proficiency in using Libraries such as React along
                    with SQL and Non-SQL Database structures in order to complete full web projects with a MERN
                    tech stack. Using primarily Javascript while currently learning other languages such as Python 
                    and Rust.
                </p>
            </Typography>
            </Grid>
        </>
    )
}

export default bio