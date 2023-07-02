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
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import AddGameCSS from '../assets/styles/GameStyle/AddGame.style';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import '../index.css';

//for drawer line
const drawerWidth = 240;

//for addgame style
const useStyles = makeStyles(AddGameCSS);

export default function AddGame(props) {

    //for addgame style
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


    //for game and player state
    const [name, setName] = useState("")
    const [player, setPlayer] = useState("")
    const [nextErr, setNextErr] = useState(false)

    //for admin slider
    const [heme, setHeme] = useState(0);
    const handleOpen = () => {
        setHeme(!heme);
    };

    //for next btn functionality
    const handleNext = () => {
        if (name === "" || player === "") {
            setNextErr(true)
            navigate('/addgame');
        } else {
            setNextErr(false)
            navigate("/teamone")
        }

        //for addGame api functionality
        console.log(name, player)
        const data = {
            name: name,
            total_players: player,
        }
        axios.post('http://192.168.1.60:4000/gameType/addGameType', data)
            .then(res => {
                console.log(100, res)
                if (res.status === 200) {
                }
            });
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


    //for addgame btn menu functionality
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        navigate("/addgame")
    };

    const handleClose = (event) => {
        setAnchorEl(event.currentTarget);
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

                <Typography variant="h5" className={classes.box4} gutterBottom >
                    Add New Game Details Here
                </Typography>
                <Grid container spacing={5} alignItems='center' >
                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: -4, lg: 0 } }}>
                        <Card className={classes.card1}>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                variant="contained" className={classes.addgame}>Add Game</Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={!open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                className={classes.menu}
                            >
                                <Box className={classes.box5} > {nextErr ? <p style={{ color: "red" }}>please fill all the fields*</p> : ""} </Box>
                                <MenuItem><TextField required value={name} onChange={(e) => setName(e.target.value)} className={classes.type1} id="standard-basic" label="Enter Game Name" variant="standard" /></MenuItem>
                                <MenuItem><TextField required value={player} onChange={(e) => setPlayer(e.target.value)} sx={{ width: '50%' }} id="standard-basic" label="Enter total_players" type="number" variant="standard" /></MenuItem>
                                <MenuItem><Button onClick={handleNext} className={classes.nextbtn} variant="contained" sx={{}}>Next</Button></MenuItem>
                            </Menu>
                            <Button className={classes.btn} >  Team 1</Button>
                            <Button className={classes.btn} >Team 2</Button>
                            {/* <Button className={classes.btn} >  Date & time</Button>
                            <Button className={classes.btn} >Prize Info</Button>
                            <Button className={classes.btn} >Live Date</Button> */}
                        </Card>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
}