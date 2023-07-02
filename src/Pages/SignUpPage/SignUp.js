import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import img from '../../assets/images/SignUpImage/SignUp.png'
import { makeStyles } from '@mui/styles';
import SignUpCSS from '../../assets/styles/SignUpStyle/SignUp.Style';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import drill from '../../assets/images/SignUpImage/drill.png'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';


//for signup style
const useStyles = makeStyles(SignUpCSS);



const SignUp = () => {

    //for signup style
    const classes = useStyles();

    //for Navigate page
    const navigate = useNavigate();

    //mui theme provider
    const theme = createTheme();


    //for user  states 
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [Repassword, setRePassword] = useState("");


    //for validation states 
    const [nameErr, setNameErr] = useState(false)
    const [lastNameErr, setLastNameErr] = useState(false)
    const [useError, setUseErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [RePassErr, setRePassErr] = useState(false)

    //mui remember slide
    const [rememberMe, setRememberMe] = useState(false);
    const handleSetRememberMe = () => setRememberMe(!rememberMe);


    // form register functionality
    function submitFun(e) {

        // if (user.length > 3 || password.length > 3) {
        //     console.log(name, lastName, user, password, Repassword);

        //     const data = {
        //         "firstName": name,
        //         "lastName": lastName,
        //         "email": user,
        //         "password": password,
        //         "Repassword": Repassword,

        //     }
        //     axios.post('http://192.168.1.60:4000/users/registerUser', data)
        //         .then(res => {
        //             console.log(res)
        //             alert("Registered Successfully");
        //             if (res.status === 201) {
        //                 localStorage.setItem('email', user)
        //                 localStorage.setItem('lastName', lastName)
        //                 localStorage.setItem('firstName', name)


        //                 setTimeout(() => {
        //                     navigate("/login");
        //                 },);
        //             }
        //         });

        // }
        // else {
        //     console.log(name, lastName, user, password, Repassword);
        //     alert("please fill the data")
        // }
        navigate("/login");
        e.preventDefault();
    }

    //for password visible functionality
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    //name error validation
    function nameFun(e) {
        let item = e.target.value;
        if (item.length < 2 || item === Number) {
            setNameErr(true)
        }
        else {
            setNameErr(false);
        }
        setName(item)
    }


    //lastname error validation
    function lastNameFun(e) {
        let item = e.target.value;
        if (item.length < 2) {
            setLastNameErr(true)
        }
        else {
            setLastNameErr(false);
        }
        setLastName(item)
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


    // repassword error validation
    function RepassFun(e) {
        let item = e.target.value;
        if (item !== password) {

            setRePassErr(true)
        }
        else {
            setRePassErr(false);
        }
        setRePassword(item);
    }

    //login button functionality
    function LoginFun() {
        // let register = localStorage.getItem("email");
        // if (!register) {
        //     navigate('/');
        // } else {
        //     navigate('/login');
        // }
        navigate('/login');
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

                                sign up to your account

                            </Typography>

                            <Link  className={classes.box3}>
                               .
                            </Link>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={5} >
                        <Box
                            className={classes.drill}
                            component="img"
                            //border='1px solid black'
                            src={drill}
                            alt="drill"
                        />

                        <Box
                            className={classes.box4}
                            //border="1px solid blue"
                            sx={{
                                my: 12,
                                mx: 4,
                                height:500
                            }}
                        >

                            <Typography
                                component="h1"
                                className={classes.type1}
                            >

                                <Link
                                    component="h1"
                                    color="#7569F1"
                                    sx={{
                                        textDecoration: "none",
                                        fontSize: "30px !important",
                                        fontWeight: "bold !important",
                                        fontFamily: "Roboto Slab, serif !important",
                                    }}
                                >
                                    Sign Up
                                </Link>
                                Your Account
                            </Typography>

                            <Box
                                component="form"
                                className={classes.new}
                                onSubmit={submitFun}
                                color="text.secondary"
                                //border='1px solid black'
                                sx={{
                                    "& .MuiTextField-root": { mt: 2 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Grid display="flex" container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            margin="normal"
                                            autoComplete="true"
                                            id="standard-read-only-input"
                                            label="First Name"
                                            placeholder="James"
                                            required
                                            InputProps={{
                                                readOnly: false,
                                            }}
                                            sx={{ width: "100%" }}
                                            variant="standard"
                                            value={name}
                                            onChange={nameFun}

                                        />

                                        {nameErr ? (
                                            <p style={{ color: "red" }}>invalid Name</p>
                                        ) : (

                                            ""

                                        )}

                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ mt: "0%" }}>
                                        <TextField
                                            margin="normal"
                                            autoComplete="true"
                                            id="standard-read-only-input"
                                            label="Last Name"
                                            required
                                            placeholder="devine"
                                            InputProps={{
                                                readOnly: false,
                                            }}
                                            sx={{ width: "100%" }}
                                            variant="standard"
                                            value={lastName}
                                            onChange={lastNameFun}
                                        />
                                        {lastNameErr ? (
                                            <p style={{ color: "red" }}>invalid Name</p>
                                        ) : (
                                            ""
                                        )}

                                    </Grid>


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
                                            //margin="normal"
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


                                    <FormControl sx={{ mt: 2, ml: 2, width: '54%' }} variant="standard">
                                        <InputLabel required>Re Enter Password</InputLabel>
                                        <Input
                                            margin="normal"
                                            placeholder="************"
                                            id="standard-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            autoComplete="current-password"
                                            variant="standard"
                                            value={Repassword}
                                            onChange={RepassFun}
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
                                        /> {RePassErr ? <p style={{ color: "red" }}>wrong password</p> : ""}
                                    </FormControl>


                                    <FormControlLabel
                                        control={<Checkbox onClick={handleSetRememberMe} value="rememberMe" color="primary" />}
                                        label="Remember me"
                                        sx={{ width: "100%", ml: 1 }}

                                    />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        className={classes.btn}
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            //border:'1px solid red'
                                        }}
                                    >
                                        Sign Up
                                    </Button>

                                    <Grid container>
                                        <Grid item xs mt="-1%">
                                            <Link
                                                onClick={LoginFun}
                                                variant="body2"
                                                color="inherit"
                                                sx={{ textDecoration: "none", mt: "-1%", ml: '50%' }}
                                            >
                                                Login
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

export default SignUp;
