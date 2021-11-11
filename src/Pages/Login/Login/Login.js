import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const { loginUser, isLoading, authError, user, singInWithGoogle } = useAuth()
    const location = useLocation()
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
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    const handleGoogleSingIn = () => {
        singInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 20 }} item xs={12} md={6}>
                    <Typography variant="body1">
                        Login
                    </Typography>
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
                    <Button
                        onClick={handleLoginSubmit}
                        sx={{ width: '75%', m: 1 }}
                        type='submit'
                        variant="contained">
                        Login
                    </Button>
                    <NavLink to="/register">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Create Successful!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>

                    }
                    <p>--------OR---------</p>
                    <Button onClick={handleGoogleSingIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;