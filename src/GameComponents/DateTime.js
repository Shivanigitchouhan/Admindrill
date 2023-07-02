import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import GridViewIcon from '@mui/icons-material/GridView';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import drill from '../assets/images/DashboardImage/drill.png'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import DateTimeCSS from '../assets/styles/GameStyle/DateTime.style';
import TimerIcon from '@mui/icons-material/Timer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import '../index.css';

//for drawer line
const drawerWidth = 240;

//for date&time style
const useStyles = makeStyles(DateTimeCSS);

export default function DateTime(props) {


    //for select location
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };


    //for select country
    const [country, setCountry] = React.useState('');
    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };


    //for date&time style
    const classes = useStyles();

    //for Navigate page
    const navigate = useNavigate();


    //for sidebar highlight button click
    const [activeDash, setActiveDash] = useState(false);
    const [activeGame, setActiveGame] = useState(false);
    const [activeUser, setActiveUser] = useState(false);
    const [activePlayer, setActivePlayer] = useState(false);
    const [activeProfile, setActiveProfile] = useState(false);
    const [activeLog, setActiveLog] = useState(false);

    //for validation err
    const [nextErr, setNextErr] = useState(false)

    //for admin slider
    const [heme, setHeme] = useState(0);
    const handleClick = () => {
        setHeme(!heme);
    };


    //for next button
    const handleNext = () => {
        if (country == "") {
            setNextErr(true)
            navigate('/datetime')
            console.log(234, true)
        }
        else {
            setNextErr(false)
            navigate('/price')
            console.log(300, false)
        }
    }

    //for button active highlight
    const handleDashClick = (event) => {
        setActiveDash(!activeDash);
        navigate("/dashboard")
    };
    const handleGameClick = (event) => {
        setActiveGame(!activeGame);
        navigate("/onlygame")
    };
    const handleUserClick = (event) => {
        setActiveUser(!activeUser);
        navigate("/users")
    };
    const handlePlayerClick = (event) => {
        setActivePlayer(!activePlayer);
        navigate("/players")
    };
    const handleProfileClick = (event) => {
        setActiveProfile(!activeProfile);
        navigate("/profile")
    };
    const handleLogClick = (event) => {
        setActiveLog(!activeLog);
        navigate("/")
    };

//for mobile responsive
const { window } = props;
const [mobileOpen, setMobileOpen] = React.useState(false);

const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
};


const drawer = (
<div>

  <Box className={classes.box1} >
    <Box className={classes.color} sx={{ background: '#EC294C' }}></Box>
    <Box className={classes.color} sx={{ background: '#FFAF40' }}></Box>
    <Box className={classes.color} sx={{ background: '#2EAC1A' }}></Box>
  </Box>

  <Box
    className={classes.box2}
    component="img"
    src={drill}
    alt="drill"
    opacity={0.7}

  />
    <div className="toggle-slide" onClick={handleClick}>
      <div style={{ color: ' #7569F1', padding: '8%', fontWeight: 'bold' }} className={`switch ${heme ? "slide " : ""}`}>Admin</div>
    </div>


    <Toolbar sx={{ m: '18%', }} />
    <List display="flex"  >
      <Button onClick={handleDashClick} sx={{ color: activeDash ? "#7569F1" : "black", ml: '-3%', width: '100%' }}><GridViewIcon sx={{ m: '6%' }} />Dashboard</Button>
      <Button onClick={handleGameClick} sx={{ color: activeGame ? "#7569F1" : "#7569F1", ml: '-12%', width: '100%' }}><SportsEsportsIcon sx={{ m: '6%' }} />Games</Button>
      <Button onClick={handleUserClick} sx={{ color: activeUser ? "#7569F1" : "black", ml: '-12%', width: '100%' }}><SportsHandballIcon sx={{ m: '6%' }} />Users</Button>
      <Button onClick={handlePlayerClick} sx={{ color: activePlayer ? "#7569F1" : "black", ml: '-2%', width: '100%' }}><SportsHandballIcon sx={{ m: '6%' }} />Add Players</Button>
      <Button onClick={handleProfileClick} sx={{ color: activeProfile ? "#7569F1" : "black", ml: '-4%', width: '100%' }}><AccountCircleIcon sx={{ m: '6%' }} />My Profile</Button>
      <Button onClick={handleLogClick} sx={{ color: activeLog ? "#7569F1" : "black", ml: '-10%', width: '100%' }}><LogoutIcon sx={{ m: '6%' }} />Logout</Button>
    </List>
  </div>
);

const container = window !== undefined ? () => window().document.body : undefined;


    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                {/* <Toolbar> */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                {/* </Toolbar> */}
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>


            <Box
                component="main"
                className={classes.box3}

            >
                <Divider />
                <Toolbar />

                <Typography variant="h5" gutterBottom className={classes.type1}>
                    Add New Game Details Here
                </Typography>

                <Grid container spacing={5} alignItems='center' >
                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: -4, lg: 0 } }}>
                        <Card className={classes.card1}>
                            <Button onClick={() => navigate("/contest")} className={classes.btn1}>Add Game</Button>
                            <Button onClick={() => navigate("/addcontest")} className={classes.btn}>Contest</Button>
                            {/* <Button onClick={() => navigate("/teamtwo")} className={classes.btn}>Team 2</Button> */}
                            <Button onClick={() => navigate("/datetime")} variant="contained" className={classes.btn3} >Date & time</Button>
                            <Button className={classes.btn}>Prize Info</Button>
                            <Button className={classes.btn}>Live Date</Button>
                        </Card>
                        <Card className={classes.card2}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Box sx={{ mb: '-1% ' }}>{nextErr ? <p style={{ color: "red", }}>please fill all the fields</p> : ""}</Box>
                                <Box> <FormControl variant="standard" sx={{ mt: 1, }}>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['MobileTimePicker', 'MobileTimePicker']}>
                                            <MobileTimePicker sx={{ width: '650px !important' }} label={'Select Time'} openTo="minutes" />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </FormControl><TimerIcon className={classes.timeIcon}  />
                                </Box>
                                <Box sx={{ mt: '-3% !important' }}><FormControl variant="standard" sx={{ minWidth: 120 }}>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker sx={{ width: '650px !important' }} label="Select Date" />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </FormControl>
                                </Box>

                                <Box className={classes.box4}><FormControl variant="standard" sx={{ minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Select Country </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        sx={{ width: '539%' }}
                                        value={country}
                                        onChange={handleChangeCountry}
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                </Box>
                                <Box sx={{ ml: '1% !important', mt: '1% !important' }} ><FormControl variant="standard" sx={{ minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Select Location </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        sx={{ width: '539%' }}
                                        value={age}
                                        onChange={handleChange}
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                </Box>
                            </Box>
                        </Card>

                        <Button onClick={handleNext} className={classes.nextbtn} variant="contained" >Next</Button>

                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
}