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
import drill from '../../assets/images/DashboardImage/drill.png'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import ProfileCSS from '../../assets/styles/ProfileStyle/Profile.Style';
import img from '../../assets/images/DashboardImage/camera.png'
import '../../../src/index.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
//import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

//for drawer line
const drawerWidth = 240;

//for profile style
const useStyles = makeStyles(ProfileCSS);


//for responsive profile img
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Profile(props) {              //passing props because of mobile responsive menuicon

  //for profile style
  const classes = useStyles();


  //for Navigate page
  const navigate = useNavigate();


  //for getitem from localstorage
  let name = localStorage.getItem('firstName')
  let lastName = localStorage.getItem("lastName");
  let email = localStorage.getItem('email')

  //for sidebar option  states 
  const [activeDash, setActiveDash] = useState(false);
  const [activeGame, setActiveGame] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activePlayer, setActivePlayer] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeLog, setActiveLog] = useState(false);

  //for admin slider functionality
  const [theme, setTheme] = useState(0);
  const handleClick = () => {
    setTheme(!theme);
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
    // localStorage.clear()
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
        <div style={{ color: ' #7569F1', padding: '8%', fontWeight: 'bold' }} className={`switch ${theme ? "slide " : ""}`}>Admin</div>
      </div>


      <Toolbar sx={{ m: '18%', }} />
      <List display="flex"  >
        <Button onClick={handleDashClick} sx={{ color: activeDash ? "#7569F1" : "black", ml: '-3%', width: '100%' }}><GridViewIcon sx={{ m: '6%' }} />Dashboard</Button>
        <Button onClick={handleGameClick} sx={{ color: activeGame ? "#7569F1" : "black", ml: '-12%', width: '100%' }}><SportsEsportsIcon sx={{ m: '6%' }} />Games</Button>
        <Button onClick={handleUserClick} sx={{ color: activeUser ? "#7569F1" : "black", ml: '-12%', width: '100%' }}><SportsHandballIcon sx={{ m: '6%' }} />Users</Button>
        <Button onClick={handlePlayerClick} sx={{ color: activePlayer ? "#7569F1" : "black", ml: '-2%', width: '100%' }}><SportsHandballIcon sx={{ m: '6%' }} />Add Players</Button>
        <Button onClick={handleProfileClick} sx={{ color: activeProfile ? "#7569F1" : "#7569F1", ml: '-4%', width: '100%' }}><AccountCircleIcon sx={{ m: '6%' }} />My Profile</Button>
        <Button onClick={handleLogClick} sx={{ color: activeLog ? "#7569F1" : "black", ml: '-10%', width: '100%' }}><LogoutIcon sx={{ m: '6%' }} />Logout</Button>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;




  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <>
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
          sx={{ ml: 1, flexGrow: 1, bgcolor: 'background.default', p: 5, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Divider />
          <Toolbar />

          <Paper
            elevation={0}
            sx={{
              p: 3,
              //border:'1px solid red',
              marginLeft: '0px',
              maxWidth: 1200,
              flexGrow: 1,
              mt: '-5%',
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', }}>
                      Personal Information
                    </Typography>
                    <Box >
                      <Box display='flex'>
                        <Typography gutterBottom variant="subtitle1" component="div" >
                          UserName  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;:
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: 'black' }}>moni jain</Typography>
                      </Box>
                      <Box display='flex' >
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Password  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;:
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: 'black' }}>XXXXXXXXXX</Typography>
                      </Box>
                      <Box display='flex'>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Contact Number &nbsp; &nbsp;:
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: 'black' }}>+01XXXXX72</Typography>
                      </Box>
                      <Box display='flex'>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;:
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: 'black' }}>abc@gmail.com</Typography>
                      </Box>
                      <Box display='flex'>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Verification  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: '#2EAC1A' }}>Verified</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <ButtonBase sx={{ width: 300, height: 250, mt: -3, ml: -1 }}>
                  <Img alt="complex" src={img} />
                  <Button variant="contained" component="label" sx={{ ml: -13, mt: -22, height: 25, borderRadius: '0px 10px 0px 10px', border: '1px solid white', backgroundColor: '#7569F1', fontWeight: 'bold' }}>
                    Change
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </ButtonBase>
              </Grid>
            </Grid>
          </Paper>

          <Typography variant="h5" gutterBottom sx={{  fontWeight: 'bold', mt: '1%', ml: '0%',pl:3 }}>
            Settings
          </Typography>

          <Paper
            sx={{
              p: 0,
              //border:'1px solid red',
              //ml: 0,
              marginLeft: 'auto',
              maxWidth: 1200,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Button sx={{ ml: 2, color: '#7569F1', fontSize: '18px', fontWeight: 'bold' }}>xyz <Button sx={{ ml: 10, color: 'black', fontSize: '18px', fontWeight: 'bold' }}>xyz  <Button sx={{ ml: 10, color: 'black', fontSize: '18px', fontWeight: 'bold' }}>xyz</Button></Button></Button>
          </Paper>

          <Paper
            sx={{
              p: 3,
              //border:'1px solid red',
              marginLeft: 'auto',
              maxWidth: 1200,
              flexGrow: 1,
              //ml: 0,
              mt: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Box >
                      <Box display='flex'>
                        <Typography gutterBottom variant="subtitle1" component="div" >
                          UserName  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;:
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: 'black' }}>moni jain</Typography>
                      </Box>
                      <Box display='flex' >
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Password  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;:
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: 'black' }}>XXXXXXXXXX</Typography>
                      </Box>
                      <Box display='flex'>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Contact Number &nbsp; &nbsp;:
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: 'black' }}>+01XXXXX72</Typography>
                      </Box>
                      <Box display='flex'>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;:
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: 'black' }}>abc@gmail.com</Typography>
                      </Box>
                      <Box display='flex'>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Verification  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :
                        </Typography>
                        <Typography sx={{ ml: 4, fontSize: '18px', color: '#2EAC1A' }}>Verified</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

        </Box>
      </Box>
    </>
  );
}