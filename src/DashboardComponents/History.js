import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import GridViewIcon from '@mui/icons-material/GridView';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import drill from '../assets/images/DashboardImage/drill.png'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HistoryCSS from '../assets/styles/DashboardStyle/History.Style';
import Avatar from '@mui/material/Avatar';
import avtr13 from '../assets/images/AvtarImages/avtr13.png'
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import '../index.css';

//for drawer line
const drawerWidth = 240;

//for history style
const useStyles = makeStyles(HistoryCSS);


//for static history list functionality
function RenderRow() {

    const navigate = useNavigate();

    return (
        <ListItem component="div" disablePadding>
            <ListItemButton>
                <ListItemText>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '100%',
                            marginTop: '1%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '30px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1.5, ml: 2 }} src={avtr13} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', ml: 3, mt: 1 }}>Samarth Singh
                            <Typography variant='subtitle2'>smarthsinghh</Typography></Typography>
                        <Typography variant='subtitle2' sx={{ ml: 30, mt: 3 }}>
                            Profile Viewed By Admin
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold', ml: 38, mt: 3, color: '#EC294C' }}>Account Deactivated</Typography>
                    </Box>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default function History(props) {

    //for history style
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
    const handleOpen = () => {
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
    };

   //for mobile responsive
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
 
   const handleDrawerToggle = () => {
     setMobileOpen(!mobileOpen);
   };
 
   const drawer = (
     <div>
       <Box className={classes.box1}>
         <Box className={classes.color} sx={{ background: "#EC294C" }}></Box>
         <Box className={classes.color} sx={{ background: "#FFAF40" }}></Box>
         <Box className={classes.color} sx={{ background: "#2EAC1A" }}></Box>
       </Box>
 
       <Box
         className={classes.box2}
         component="img"
         src={drill}
         alt="drill"
         opacity={0.7}
       />
       <div className="toggle-slide" onClick={handleOpen}>
         <div
           style={{ color: " #7569F1", padding: "8%", fontWeight: "bold" }}
           className={`switch ${theme ? "slide " : ""}`}
         >
           Admin
         </div>
       </div>
 
       <Toolbar sx={{ m: "18%" }} />
       <List display="flex">
         <Button
           onClick={handleDashClick}
           sx={{
             color: activeDash ? "#7569F1" : "black",
             ml: "-3%",
             width: "100%",
           }}
         >
           <GridViewIcon sx={{ m: "6%" }} />
           Dashboard
         </Button>
         <Button
           onClick={handleGameClick}
           sx={{
             color: activeGame ? "#7569F1" : "#7569F1",
             ml: "-12%",
             width: "100%",
           }}
         >
           <SportsEsportsIcon sx={{ m: "6%" }} />
           Games
         </Button>
         <Button
           onClick={handleUserClick}
           sx={{
             color: activeUser ? "#7569F1" : "black",
             ml: "-12%",
             width: "100%",
           }}
         >
           <SportsHandballIcon sx={{ m: "6%" }} />
           Users
         </Button>
         <Button
           onClick={handlePlayerClick}
           sx={{
             color: activePlayer ? "#7569F1" : "black",
             ml: "-2%",
             width: "100%",
           }}
         >
           <SportsHandballIcon sx={{ m: "6%" }} />
           Add Players
         </Button>
         <Button
           onClick={handleProfileClick}
           sx={{
             color: activeProfile ? "#7569F1" : "black",
             ml: "-4%",
             width: "100%",
           }}
         >
           <AccountCircleIcon sx={{ m: "6%" }} />
           My Profile
         </Button>
         <Button
           onClick={handleLogClick}
           sx={{
             color: activeLog ? "#7569F1" : "black",
             ml: "-10%",
             width: "100%",
           }}
         >
           <LogoutIcon sx={{ m: "6%" }} />
           Logout
         </Button>
       </List>
     </div>
   );
 
   const container =
     window !== undefined ? () => window().document.body : undefined;
 
   const Img = styled("img")({
     margin: "auto",
     display: "block",
     maxWidth: "100%",
     maxHeight: "100%",
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
          sx={{ mr: 2, display: { sm: "none" } }}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
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
                <Link
                    className={classes.customLink}

                    onClick={() => navigate("/notification")}
                    underline="hover"

                >
                    <NotificationsNoneIcon className={classes.notification} />
                    Custom Notifications
                </Link>
                <Divider />
                <Toolbar />
                <Typography variant="h6" gutterBottom className={classes.historyType} >
                    History
                </Typography>
                <Grid container spacing={5} alignItems='center' >
                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: -4, lg: 0 } }}>
                        <Card className={classes.card}>
                            <Box
                                className={classes.box5}
                            >
                                <FixedSizeList
                                    height={567}
                                    width='74vw'
                                    itemSize={1}
                                    itemCount={1}
                                    overscanCount={1}
                                    borderRadius='30px !important'
                                >
                                    {RenderRow}
                                </FixedSizeList>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
}