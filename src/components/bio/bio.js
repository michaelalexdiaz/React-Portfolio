import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Typography>
            </Grid>
        </>
    )
}

export default bio