import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import img from '../../assets/images/SignUpImage/SignUp.png'
import { makeStyles } from '@mui/styles';
import LoginCSS from '../../assets/styles/SignUpStyle/SignUp.Style';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Link from '@mui/material/Link';
import drill from '../../assets/images/SignUpImage/drill.png'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


//for login style
const useStyles = makeStyles(LoginCSS);

const Login = () => {

    //for login style
    const classes = useStyles();

    //for Navigate page
    const navigate = useNavigate();

    //mui theme provider
    const theme = createTheme();

    //for user  states 
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    //for validation states 
    const [useError, setUseErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    //mui remember slide
    const [rememberMe, setRememberMe] = useState(false);
    const handleSetRememberMe = () => setRememberMe(!rememberMe);

    //for password visible functionality
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    // form login functionality
    function submitFun(e) {

        // if (user.length > 3 || password.length > 3) {
        //     console.log(user, password);

        //     const data = {

        //         "email": user,
        //         "password": password,

        //     }

        //     axios.post('http://192.168.1.60:4000/users/userLogin', data)
        //         .then(res => {
        //             console.log(400, res.data.token)
        //             alert(" Logged in successfully");
        //             if (res.status === 200) {
        //                 //localStorage.setItem('email', user)
        //                 localStorage.setItem('token', res.data.token);
        //                 setTimeout(() => {
        //                     navigate("/dashboard");
        //                 },);
        //             }
        //         });

        // }
        // else {
        //     console.log(user, password);
        //     alert("please fill the data")
        // }
        navigate("/dashboard");
        e.preventDefault();
    }


    //email error validation
    function userFun(e) {
        let item = e.target.value;
        if (!item.includes('@')) {

            setUseErr(true)
        }
        else {
            setUseErr(false);
        }
        setUser(item);
    }

    //password error validation
    function passFun(e) {
        let item = e.target.value;
        if (item.length < 3) {

            setPassErr(true)
        }
        else {
            setPassErr(false);
        }
        setPassword(item);
    }



    return (
        <div>

            <ThemeProvider theme={theme}>

                <Grid container component="main">
                    <CssBaseline />
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.grid1}
                        sx={{
                            backgroundImage: `url(${img})`,
                            border:'1px solid gray',
                            height:'745px',
                            width:'1024px'
                        }}
                    >
                        <Grid item xs={12} md={8} className={classes.grid}>

                            <Typography className={classes.box}>Welcome</Typography>
                            <Typography className={classes.box2}>

                                Login to your account

                            </Typography>

                            <Link className={classes.box3}>
                                .</Link>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={5} >

                        <Box
                            className={classes.drill}
                            sx={{
                                //border:'1px solid blue'
                            }}
                            component="img"
                            src={drill}
                            alt="drill"
                        />

                        <Box
                            className={classes.box4}
                            sx={{
                                my: 12,
                                mx: 4,
                                height:500,
                                //border:'1px solid red'
                            }}

                        >
                            <Typography
                                component="h1"
                                className={classes.type1}
                                sx={{
                                    marginTop:'15% !important',
                                }}
                            >
                                <Link
                                    component="h1"
                                    color="#7569F1"
                                    sx={{
                                        //border: '1px solid red',
                                        //marginTop:'30% !important',
                                        textDecoration: "none",
                                        fontSize: "30px !important",
                                        fontWeight: "bold !important",
                                        fontFamily: "Roboto Slab, serif !important",
                                    }}
                                >
                                    Login
                                </Link>
                                Your Account
                            </Typography>
                            <Box
                                component="form"
                                className={classes.new}
                                onSubmit={submitFun}
                                color="text.secondary"
                                sx={{
                                    "& .MuiTextField-root": { mt: 4 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Grid display="flex" container spacing={2}>

                                    <TextField
                                        margin="normal"
                                        autoComplete="true"
                                        label="Email Address"
                                        //fullWidth
                                        sx={{ width: "97.3%", ml: 2 }}
                                        required
                                        placeholder="James18cs101@marquengg.in"
                                        InputProps={{
                                            readOnly: false,
                                        }}
                                        variant="standard"
                                        value={user}
                                        onChange={userFun}
                                    />
                                    {useError ? <p style={{ color: "red" }}>invalid userid</p> : ""}

                                    <FormControl sx={{ mt: 2, width: '54%', ml: 2 }} variant="standard">
                                        <InputLabel required>Password</InputLabel>
                                        <Input
                                            margin="normal"
                                            placeholder="************"
                                            id="standard-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            autoComplete="current-password"
                                            variant="standard"
                                            value={password}
                                            onChange={passFun}
                                            sx={{ width: '180%' }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        /> {passErr ? <p style={{ color: "red" }}>wrong password</p> : ""}

                                    </FormControl>

                                    <FormControlLabel
                                        
                                        //border='1px solid red'
                                        control={<Checkbox onClick={handleSetRememberMe} value="rememberMe" color="primary" />}
                                        label="Remember me"
                                        sx={{ width: "100%", ml: 1 }}
                                    />

                                     <Link href="#" variant="body2" sx={{ textDecoration: "none", color: '#7569F1', ml: '75%', mt: -4, }}>
                                        Forgot password?
                                    </Link> 


                                    <Button
                                        type="submit"
                                        fullWidth
                                        className={classes.btn}
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                        }}

                                    >
                                        Login
                                    </Button>
                                    <Grid container>
                                        <Grid item xs mt="-1%">
                                            <Link
                                                href="/"
                                                variant="body2"
                                                color="inherit"
                                                sx={{ textDecoration: "none", mt: "-1%", ml: '43%' }}
                                            >
                                                Create Account
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div >
    );
}

export default Login;
