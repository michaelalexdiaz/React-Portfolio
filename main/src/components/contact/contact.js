import { useState } from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Contact = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        nameNeeded: false,
        invalidEmail: false,
        messageNeeded: false

    })

    const handleInputChange = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value })
    }

    const handleNameBlur = () => {
        return(formState.name === "" ? setFormState({...formState, nameNeeded: true, invalidEmail: false, messageNeeded: false}) : "" )
    }
    const validateEmail = (inputText) => {
        let mailFormat =  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/

        if(inputText.match(mailFormat) === true) {
            return true
        } else {
            return false
        }
    }
    const handleEmailBlur = () => {
        return(validateEmail(formState.email) === true ? "" : setFormState({...formState, invalidEmail: true, nameNeeded: false, messageNeeded: false}) )
    }
    const handleMessageBlur = () => {
        return(formState.message === "" ? setFormState({...formState, messageNeeded: true, nameNeeded: false, invalidEmail: false}) : "" )
    }


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
                <InputLabel htmlFor="name-input">Name</InputLabel>
                     <Input 
                        id="name-input" 
                        name="name" 
                        onChange={handleInputChange} 
                        aria-describedby="my-helper-text" 
                        onBlur={handleNameBlur}
                    />
            </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
            <FormControl>
                <InputLabel htmlFor="my-email">Email</InputLabel>
                     <Input 
                        id="my-email" 
                        name="email" 
                        onChange={handleInputChange} 
                        aria-describedby="my-helper-text" 
                        onBlur={handleEmailBlur}
                     />
            </FormControl>
            </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
            <InputLabel htmlFor="my-input">Message</InputLabel>
            <Grid item xs={4} md={4}></Grid>
            <TextField
            id="outlined-multiline-static"
            label="Text"
            multiline
            rows={4}
            defaultValue=""
            name="message"
            onChange={handleInputChange}
            onBlur={handleMessageBlur}
            />
        </Grid>
        <Grid item border="solid" xs={12} md={12}>
        <Button color="primary">
                <p>Submit</p>
        </Button>
        </Grid>
        <Grid container justifyContent="center">
            {
                formState.nameNeeded ? <p>The Name box cannot be empty</p> : ""
            }
            {
                formState.invalidEmail ? <p>Please enter a valid email</p> : ""
            }
            {
                formState.messageNeeded ? <p>The Message box cannot be empty</p> : ""
            }
        </Grid>
        </Typography>
        </>
    )
}

export default Contact