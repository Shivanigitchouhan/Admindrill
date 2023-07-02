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
import TextField from '@mui/material/TextField';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Divider from '@mui/material/Divider';
import PriceCSS from '../assets/styles/GameStyle/Price.style';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import '../index.css';


//for drawer line
const drawerWidth = 240;

//for price style
const useStyles = makeStyles(PriceCSS);

export default function Price(props) {


    //for price style
    const classes = useStyles();

    //for Navigate page
    const navigate = useNavigate();


    //for form states
    const [money, setMoney] = React.useState('');

    //validation state
    const [nextErr, setNextErr] = useState(false)



    //for next button
    const handleNext = () => {
        if (money == "") {
            setNextErr(true)
            navigate('/price')
            console.log(234, true)
        }
        else {
            setNextErr(false)
            navigate('/livedate')
            console.log(300, false)
        }
    }

    //for sidebar highlight button click
    const [activeDash, setActiveDash] = useState(false);
    const [activeGame, setActiveGame] = useState(false);
    const [activeUser, setActiveUser] = useState(false);
    const [activePlayer, setActivePlayer] = useState(false);
    const [activeProfile, setActiveProfile] = useState(false);
    const [activeLog, setActiveLog] = useState(false);

    //for admin slider
    const [heme, setHeme] = useState(0);
    const handleClick = () => {
        setHeme(!heme);
    };


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
                            <Button onClick={() => navigate("/contest")} className={classes.addgame}>Add Game</Button>
                            <Button onClick={() => navigate("/addcontest")} className={classes.team1}>Contest</Button>
                            {/* <Button onClick={() => navigate("/teamtwo")} className={classes.team1}>Team 2</Button> */}
                            <Button onClick={() => navigate("/datetime")} className={classes.team1} >Date & time</Button>
                            <Button onClick={() => navigate("/price")} variant="contained" className={classes.team2}>Prize Info</Button>
                            <Button className={classes.team1}>Live Date</Button>
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
                                <Box className={classes.box5}>
                                    <Box className={classes.box4}>{nextErr ? <p style={{ color: "red", }}>please fill all the fields</p> : ""}</Box>
                                    <TextField value={money} onChange={(e) => setMoney(e.target.value)} className={classes.textF} id="standard-basic" label="Enter Price Money" variant="standard" /><CurrencyRupeeIcon className={classes.rupee}/>
                                    <TextField className={classes.textF} id="standard-basic" label="Enter 1st Prizce" variant="standard" /><CurrencyRupeeIcon className={classes.rupee} />
                                    <TextField className={classes.textF} id="standard-basic" label="Enter 2nd Price" variant="standard" /><CurrencyRupeeIcon className={classes.rupee} />
                                    <TextField  className={classes.text2}  id="standard-basic" label="Enter 3nd Price" variant="standard" /><CurrencyRupeeIcon className={classes.rupee} />
                                </Box>
                                <Box className={classes.box5}>
                                    <TextField className={classes.textF} id="standard-basic" label="Enter 4th Price" variant="standard" /><CurrencyRupeeIcon className={classes.rupee} />
                                    <TextField className={classes.textF} id="standard-basic" label="Enter 5th Price" variant="standard" /><CurrencyRupeeIcon className={classes.rupee} />
                                    <TextField className={classes.textF} id="standard-basic" label="Enter 6th Price" variant="standard" /><CurrencyRupeeIcon className={classes.rupee} />
                                    <TextField className={classes.text2} id="standard-basic" label="Enter 7th Price" variant="standard" /><CurrencyRupeeIcon className={classes.rupee} />
                                </Box>
                            </Box>
                        </Card>

                        <Button onClick={handleNext} variant="contained" className={classes.nextbtn} sx={{ }}>Next</Button>

                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
}