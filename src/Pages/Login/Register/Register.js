import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const { registerUser, isLoading, authError, user } = useAuth()
    const history = useHistory()

    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 20 }} item xs={12} md={6}>
                    <Typography variant="body1">
                        Please Register
                    </Typography>
                    {!isLoading && <from>
                        <TextField
                            onChange={handleOnChange}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Name"
                            name="name"
                            variant="standard" />
                        <TextField
                            onChange={handleOnChange}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            variant="standard" />
                        <TextField
                            onChange={handleOnChange}
                            name="password"
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            variant="standard" />
                        <TextField
                            onChange={handleOnChange}
                            name="password2"
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Password"
                            type="password"
                            variant="standard" />
                        <Button
                            onClick={handleLoginSubmit}
                            sx={{ width: '75%', m: 1 }}
                            type='submit'
                            variant="contained">
                            Register
                        </Button>
                        <NavLink to="/login">
                            <Button variant="text">Already registered? Please Login</Button>
                        </NavLink>
                    </from>
                    }
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Create Successful!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>

                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;