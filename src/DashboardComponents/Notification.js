import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import GridViewIcon from '@mui/icons-material/GridView';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import drill from '../assets/images/DashboardImage/drill.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import NotifyCSS from '../assets/styles/DashboardStyle/Notification.Style';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import '../index.css';

//for drawer line
const drawerWidth = 240;

//for notification style
const useStyles = makeStyles(NotifyCSS);

export default function Notification(props) {

    //for shedule calander functionality
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClickCal = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //for notification style
    const classes = useStyles();


    //for Navigate page
    const navigate = useNavigate();

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

    //for send msg alert
    const handleSend = () => {
        alert(' message successfully sent');
        navigate('/dashboard')
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
                  <div style={{ color: ' #7569F1', padding: '8%', fontWeight: 'bold' }} className={`switch ${theme ? "slide " : ""}`}>Admin</div>
              </div>
  
  
              <Toolbar sx={{ m: '18%', }} />
              <List display="flex"  >
                  <Button onClick={handleDashClick} sx={{ color: activeDash ? "#7569F1" : "black", ml: '-3%', width: '100%' }}><GridViewIcon sx={{ m: '6%' }} />Dashboard</Button>
                  <Button onClick={handleGameClick} sx={{ color: activeGame ? "#7569F1" : "black", ml: '-12%', width: '100%' }}><SportsEsportsIcon sx={{ m: '6%' }} />Games</Button>
                  <Button onClick={handleUserClick} sx={{ color: activeUser ? "#7569F1" : "black", ml: '-12%', width: '100%' }}><SportsHandballIcon sx={{ m: '6%' }} />Users</Button>
                  <Button onClick={handlePlayerClick} sx={{ color: activePlayer ? "#7569F1" : "#7569F1", ml: '-2%', width: '100%' }}><SportsHandballIcon sx={{ m: '6%' }} />Add Players</Button>
                  <Button onClick={handleProfileClick} sx={{ color: activeProfile ? "#7569F1" : "black", ml: '-4%', width: '100%' }}><AccountCircleIcon sx={{ m: '6%' }} />My Profile</Button>
                  <Button onClick={handleLogClick} sx={{ color: activeLog ? "#7569F1" : "black", ml: '-10%', width: '100%' }}><LogoutIcon sx={{ m: '6%' }} />Logout</Button>
              </List>
  
          </div>
      );
  
      const container = window !== undefined ? () => window().document.body : undefined;
  
      const Img = styled('img')({
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
      });
  

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
                <Toolbar sx={{ mb: '-3%' }} />
                <Divider />
                <Toolbar />

                <Typography variant="h6" gutterBottom className={classes.type1} >
                    Create Custom Notification For Users
                </Typography>
                <FloatingLabel controlId="floatingTextarea2" label="Enter your message here..." >
                    <Form.Control
                        as="textarea"
                        style={{ width: '95%', height: '200px' }}
                    />
                </FloatingLabel>
                <Stack direction="row" spacing={4} sx={{ mt: '3%' }}>
                    <Button aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickCal} variant="contained" className={classes.shedule} >Schedule Message
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        className={classes.menu}
                    >
                        <MenuItem className={classes.menuItem} > <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                                    'MobileDateTimePicker',
                                ]}
                            >
                                <DemoItem >
                                    <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider></MenuItem>

                    </Menu>
                    <Button onClick={handleSend} variant="contained" className={classes.send}>
                        Send Now
                    </Button>

                </Stack>
            </Box>
        </Box>
    );
}