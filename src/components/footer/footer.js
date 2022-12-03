import React from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import './footer.css'


const Footer = () => {

    let LinkedIn ='https://www.linkedin.com/in/michael-diaz-dominguez-00a2b020b/';
    let Github = 'https://github.com/michaelalexdiaz';

    return (
        <div>
            <Box position="fixed" width="100%" bottom="0">
            <Grid container className="footer" justifyContent='center' spacing={2} padding={2}>
                <Grid item>
                    <Button color="primary">
                    <a href={Github} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    </Button>
                    <Button color="primary">
                    <a href={LinkedIn} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                    </Button>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}

export default Footer