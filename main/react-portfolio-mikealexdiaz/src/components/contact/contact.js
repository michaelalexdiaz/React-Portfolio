import React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const contact = () => {
    return (
        <>
        <Grid container justifyContent='center'>
            <Grid item>
                <h1>Contact</h1>
            </Grid>
        </Grid>
        <Typography align="center">
        <Grid container justifyContent='center'>
            <Grid item xs={12} md={12}>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                     <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                     <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                     <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Grid item xs={4} md={4}></Grid>
            <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            />
        </Grid>
        <Grid item border="solid" xs={12} md={12}>
        <Button color="primary">
                <p>Submit</p>
        </Button>
        </Grid>
        </Typography>
        </>
    )
}

export default contact