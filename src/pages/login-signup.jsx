import * as React from 'react'
import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { setFilter, loadGigs } from '../store/actions/gigs.actions.js'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'

import { connect } from "react-redux";
import { login, signup } from '../store/actions/user.actions.js'

const theme = createTheme();

export const LoginSignup = () => {

    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const loginInfo = {
            userName: data.get('userName'),
            password: data.get('password'),
            isRemember: (data.get('remember-me') !== null),
        }

        if (isLogin) {
            console.log('isLogin', isLogin)
            dispatch(login(loginInfo))
        } else {
            loginInfo.fullname = data.get('fullname')           
            dispatch(signup(loginInfo))
        }
        navigate('/')
    };

    const onChangePage = (ev) => {
        ev.preventDefault()
        setIsLogin(!isLogin )
    }


        return (
            <ThemeProvider theme={theme} >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#1cbf73' }} />
                        <Typography component="h1" variant="h5">
                            {isLogin ? 'Login' : 'Sign in'}
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="userName"
                                label="UserName"
                                name="userName"
                                autoComplete="userName"
                                autoFocus
                            />
                            {!isLogin &&
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="fullname"
                                    label="Full Name"
                                    name="fullname"
                                    autoComplete="fullname"
                                />}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" name="remember-me" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {isLogin ? 'Login' : 'Sign in'}
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    {isLogin && <Link href="#" variant="body2">
                                        Forgot password
                                    </Link>}
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={onChangePage}>
                                        {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login' }
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        )
}

