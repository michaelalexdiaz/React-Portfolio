import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import selfie from '../../assets/images/WIN_20221018_23_22_18_Pro.jpg'

const bio = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Avatar alt="Michael Diaz" src={selfie} />
                </Grid>
            </Grid>
        </div>
    )
}

export default bio