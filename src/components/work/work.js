import React from 'react';
import Grid from '@mui/material/Grid';
import Ball from '../../assets/images/Magic_8_Ball.png';
import Card from '../card';

const Work = () => {

    let projects = [{
        Title: 'Magic 8 Ball',
        Github: 'https://github.com/hhealing123/Ask-the-8-Ball',
        Webpage: 'https://hhealing123.github.io/Ask-the-8-Ball/login.html',
        Image: Ball
    },
    {
        Title: 'Magic 8 Ball',
        Github: 'https://github.com/hhealing123/Ask-the-8-Ball',
        Webpage: 'https://hhealing123.github.io/Ask-the-8-Ball/login.html',
        Image: Ball       
    },
    {
        Title: 'Magic 8 Ball',
        Github: 'https://github.com/hhealing123/Ask-the-8-Ball',
        Webpage: 'https://hhealing123.github.io/Ask-the-8-Ball/login.html',
        Image: Ball       
    }
    ]

    return (
        <>
            <Grid container  border='solid' justifyContent="center">
                <h1>Work I've Done</h1>
            </Grid>
            <Grid container spacing={4} padding={10} justifyContent="center">
                {projects.map(project =>
                    <Grid item>
                        <Card 
                        Title={project.Title} 
                        Github={project.Github} 
                        Webpage={project.Webpage}
                        Image={project.Image}
                        >
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default Work