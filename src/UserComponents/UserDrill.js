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
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import Dcoin from '../assets/images/DashboardImage/Dcoin.png'
import UserDrillCSS from '../assets/styles/UsersStyle/userDrill.style';
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import '../index.css';

//for drawer line
const drawerWidth = 240;

//for userdrill style
const useStyles = makeStyles(UserDrillCSS);

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
                        <img width='55px' height='65px' style={{ marginLeft: '1%', marginTop: '1%' }} src={Dcoin} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 0, mt: 3, color: '#2EAC1A' }}>Drill Coins Credited
                        </Typography>
                        <Typography variant='subtitle2' sx={{ ml: 25, width: '12%', mt: 1 }}>Information where he earned the drill coins</Typography>
                        <Typography variant='h5' sx={{ ml: 35, mt: 2, color: '#2EAC1A', fontWeight: 'bold' }}>
                            +&nbsp;<img width='40px' height='50px' src={Dcoin} />5000
                        </Typography>

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
                        <img width='55px' height='65px' style={{ marginLeft: '1%', marginTop: '1%' }} src={Dcoin} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 0, mt: 3, color: '#2EAC1A' }}>Drill Coins Credited
                        </Typography>
                        <Typography variant='caption' sx={{ ml: 25, width: '12%', mt: 2 }}>Via FIFA IPL 2023
                            Circket MI VS CSK</Typography>
                        <Typography variant='h5' sx={{ ml: 35, mt: 2, color: '#EC294C', fontWeight: 'bold' }}>
                            -&nbsp;<img width='40px' height='50px' src={Dcoin} />5000
                        </Typography>

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
                        <img width='55px' height='65px' style={{ marginLeft: '1%', marginTop: '1%' }} src={Dcoin} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 0, mt: 3, color: '#2EAC1A' }}>Drill Coins Credited
                        </Typography>
                        <Typography variant='subtitle2' sx={{ ml: 25, width: '12%', mt: 1 }}>Information where he earned the drill coins</Typography>
                        <Typography variant='h5' sx={{ ml: 35, mt: 2, color: '#2EAC1A', fontWeight: 'bold' }}>
                            +&nbsp;<img width='40px' height='50px' src={Dcoin} />5000
                        </Typography>

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
                        <img width='55px' height='65px' style={{ marginLeft: '1%', marginTop: '1%' }} src={Dcoin} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 0, mt: 3, color: '#2EAC1A' }}>Drill Coins Credited
                        </Typography>
                        <Typography variant='caption' sx={{ ml: 25, width: '12%', mt: 2 }}>Via FIFA IPL 2023
                            Circket MI VS CSK</Typography>
                        <Typography variant='h5' sx={{ ml: 35, mt: 2, color: '#EC294C', fontWeight: 'bold' }}>
                            -&nbsp;<img width='40px' height='50px' src={Dcoin} />5000
                        </Typography>

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
                        <img width='55px' height='65px' style={{ marginLeft: '1%', marginTop: '1%' }} src={Dcoin} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 0, mt: 3, color: '#2EAC1A' }}>Drill Coins Credited
                        </Typography>
                        <Typography variant='subtitle2' sx={{ ml: 25, width: '12%', mt: 1 }}>Information where he earned the drill coins</Typography>
                        <Typography variant='h5' sx={{ ml: 35, mt: 2, color: '#2EAC1A', fontWeight: 'bold' }}>
                            +&nbsp;<img width='40px' height='50px' src={Dcoin} />5000
                        </Typography>

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
                        <img width='55px' height='65px' style={{ marginLeft: '1%', marginTop: '1%' }} src={Dcoin} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 0, mt: 3, color: '#2EAC1A' }}>Drill Coins Credited
                        </Typography>
                        <Typography variant='caption' sx={{ ml: 25, width: '12%', mt: 2 }}>Via FIFA IPL 2023
                            Circket MI VS CSK</Typography>
                        <Typography variant='h5' sx={{ ml: 35, mt: 2, color: '#EC294C', fontWeight: 'bold' }}>
                            -&nbsp;<img width='40px' height='50px' src={Dcoin} />5000
                        </Typography>

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
                        <img width='55px' height='65px' style={{ marginLeft: '1%', marginTop: '1%' }} src={Dcoin} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 0, mt: 3, color: '#2EAC1A' }}>Drill Coins Credited
                        </Typography>
                        <Typography variant='subtitle2' sx={{ ml: 25, width: '12%', mt: 1 }}>Information where he earned the drill coins</Typography>
                        <Typography variant='h5' sx={{ ml: 35, mt: 2, color: '#2EAC1A', fontWeight: 'bold' }}>
                            +&nbsp;<img width='40px' height='50px' src={Dcoin} />5000
                        </Typography>

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
                        <img width='55px' height='65px' style={{ marginLeft: '1%', marginTop: '1%' }} src={Dcoin} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 0, mt: 3, color: '#2EAC1A' }}>Drill Coins Credited
                        </Typography>
                        <Typography variant='caption' sx={{ ml: 25, width: '12%', mt: 2 }}>Via FIFA IPL 2023
                            Circket MI VS CSK</Typography>
                        <Typography variant='h5' sx={{ ml: 35, mt: 2, color: '#EC294C', fontWeight: 'bold' }}>
                            -&nbsp;<img width='40px' height='50px' src={Dcoin} />5000
                        </Typography>

                    </Box>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default function UserDrill(props) {


    //for userdrill style
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


    //for admin slider
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
          color: activeGame ? "#7569F1" : "black",
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
          color: activeUser ? "#7569F1" : "#7569F1",
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
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Divider />
                <Toolbar />
                <Typography display='flex' variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: '-3%', ml: '2%' }}>
                    Drill Coin History
                </Typography>
                <Box
                    sx={{ ml: '2%', mt: '1%', width: '70vw', height: 337, bgcolor: 'background.paper' }}
                >
                    <FixedSizeList
                        height={500}
                        width='77vw'
                        itemSize={1}
                        itemCount={1}
                        overscanCount={1}
                        borderRadius='30px !important'
                    >
                        {RenderRow}
                    </FixedSizeList>
                </Box>
            </Box>

        </Box>
    );
}