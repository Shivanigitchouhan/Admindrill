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
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import TeamOneCSS from '../assets/styles/TeamStyles/TeamOne.style';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import '../index.css';


//for drawer line
const drawerWidth = 240;

//for teamone style
const useStyles = makeStyles(TeamOneCSS);


//for selecting games functionality
const lookup = [
    { id: 0, value: 'Select Games' },
    { id: 1, value: 'Cricket' },
    { id: 2, value: 'Football' },
    { id: 3, value: 'Baseball' },
    { id: 4, value: 'Kabaddi' },
    { id: 5, value: 'Volleyball' },
    { id: 6, value: 'Basketball' },
    { id: 7, value: 'Kho-Kho' },
    { id: 8, value: 'Hide&Seek' },
    { id: 9, value: 'soccer' },
    { id: 10, value: 'ShotPut' },
    { id: 11, value: 'string' },
    { id: 12, value: 'Caram' },
    { id: 13, value: 'boxing' },

];

export default function TeamOne(props) {

    //for teamone style
    const classes = useStyles();

    //for Navigate page
    const navigate = useNavigate();


    //for form states
    const [name, setName] = useState("")
    const [selected, setSelected] = useState(-1);
    const [won, setWon] = useState("")
    const [loss, setLoss] = useState("")
    const [match, setMatch] = useState("")
    const [draw, setDraw] = useState("")
    const [team, setTeam] = useState("")

    //for selecting games functionality
    const value = selected !== -1 && lookup[selected];


    //for image upload
    function handleUpload(e) {
        console.log(45, e.target.files[0]);
        setTeam(URL.createObjectURL(e.target.files[0]));
    }

    //for next button
    const handleNext = () => {
        // let item = ""
        // if (item == "") {  
        //     setNextErr(true)
        //     navigate('/teamone')
        // }
        // else {
        //     setNextErr(false)
        //     navigate('/teamtwo')

        // }
        navigate('/teamtwo')
        console.log(53, name, selected, won, loss, match, draw, team);

        const data = {
            team_name: name,
            gameTypeId: selected,
            matchesWon: won,
            matchesLoss: loss,
            totalMatchesPlayed: match,
            drawMatches: draw,
            teamIcon: team
        }
        axios.post('http://192.168.1.60:4000/team/addTeam', data)
            .then(res => {
                console.log(100, res)
            });
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
                            <Button onClick={() => navigate("/addgame")} className={classes.addgame} >Add Game</Button>
                            <Button onClick={() => navigate("/teamone")} className={classes.team1} variant="contained" >Team 1</Button>
                            <Button className={classes.btn}>Team 2</Button>
                            {/* <Button className={classes.btn} >Date & time</Button>
                            <Button className={classes.btn}>Prize Info</Button>
                            <Button className={classes.btn} >Live Date</Button> */}
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

                                <Box>

                                    <TextField required value={name} onChange={(e) => setName(e.target.value)} className={classes.text1} id="standard-basic" label="Enter Team Name" variant="standard" />
                                    <FormControl variant="standard" className={classes.form1}>
                                        <select
                                            style={{ padding: 10, border: 'none', color: 'text-secondary' }}
                                            onChange={(e) => setSelected(e.target.value)}
                                            value={selected}>
                                            {lookup.map((m, ix) => {
                                                return <option
                                                    key={m.id}
                                                    value={ix}
                                                >
                                                    {m.value}
                                                </option>
                                            })};
                                        </select>
                                    </FormControl><br />

                                    <TextField required value={match} onChange={(e) => setMatch(e.target.value)} className={classes.text2} id="standard-basic" label="Enter TotalMatchesPlayed" type="number" variant="standard" />
                                    <TextField required value={won} onChange={(e) => setWon(e.target.value)} className={classes.text3} id="standard-basic" label="Enter MatchesWon" type="number" variant="standard" /><br />
                                    <TextField required value={loss} onChange={(e) => setLoss(e.target.value)} className={classes.text2} id="standard-basic" label="Enter MatchesLoss" type="number" variant="standard" />
                                    <TextField required value={draw} onChange={(e) => setDraw(e.target.value)} className={classes.text3} id="standard-basic" label="Enter DrawMatches" type="number" variant="standard" />
                                </Box>

                            </Box>
                        </Card>
                        <Card className={classes.card3}>
                            <Box >
                                <Typography className={classes.type5} variant="h6" gutterBottom>
                                    Upload Team Icon
                                </Typography>
                                <Button onChange={handleUpload} variant="contained" className={classes.upload} component="label">
                                    Upload Image
                                    <input hidden
                                        src={team}
                                        type="file"
                                        onChange={handleUpload}
                                        accept="image/*" multiple />
                                </Button>
                                <Typography className={classes.type2}  display="block" gutterBottom>
                                    or Drag & Drop
                                </Typography>
                            </Box>
                        </Card>
                        <Button onClick={handleNext} className={classes.nextbtn}  variant="contained" >Next</Button>

                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
}