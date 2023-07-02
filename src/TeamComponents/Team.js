import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {ListItem } from "react-scrollable-accordion";
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
import Cards from '../DashboardComponents/Cards';
import backImg from '../assets/images/DashboardImage/backImg.png'
import Divider from '@mui/material/Divider';
import { Grid, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TeamCSS from '../assets/styles/TeamStyles/Team.Style';
import img from '../assets/images/DashboardImage/Rectangle.png'
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { FixedSizeList } from "react-window";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import avtr12 from "../assets/images/AvtarImages/avtr12.png";
import '../index.css';

//for drawer line
const drawerWidth = 240;

//for team style
const useStyles = makeStyles(TeamCSS);

//for static list data
function RenderRow() {
  const navigate = useNavigate();

  return (
    <ListItem component="div" disablePadding>
      <ListItemButton>
        <ListItemText>
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "0%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "1%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "1%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "1%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "1%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "1%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "1%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "1%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "1%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          
          <Box
            sx={{
              height: "80px",
              width: "102%",
              marginTop: "1%",
              marginLeft: "-1%",
              backgroundColor: "rgba(188, 155, 241, 0.13)",
              borderRadius: "30px",
              display: "flex",
              //border: "1px solid red",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "53px", width: "53px", mt: 1.5, ml: 2 }}
              src={avtr12}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
            >
              Virat Kohali
              <Typography variant="subtitle2">IPL 2023</Typography>
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 38, mt: 1 }}>
              Rajsthan Royals
              <Typography variant="subtitle2">Wicket Keeper (c)</Typography>
              <Typography variant="subtitle2">Added On 22 sep 2022</Typography>
            </Typography>
            <Button
              onClick={() => navigate("/playersprofile")}
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                height: "26px",
                width: "110px",
                borderRadius: "20px",
                ml: 41,
                mt: 3,
                border: "1px solid black",
                color: "black",
              }}
            >
              View Profile
            </Button>
          </Box>
          
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default function Team(props) {

    //for getallteam api  functionality
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('http://192.168.1.60:4000/team/getTeams').then((res) => {
            setData(res.data.res)
        }).then((resp) => {
        })
    }, [])


    //For UpdateGame Api Functionality 
    const [updateValue, setUpdateValue] = useState();
    const [updateValueTwo, setUpdateValueTwo] = useState();

    const values = {
        "name": updateValueTwo,
        "total_players": parseInt(updateValue)
    }


    //for getOneGamebyId functionality
    const [newId, setNewId] = useState("")
    const [dataById, setDatabyid] = useState('')

    const handleGetiD = async (id) => {
        console.log(111, id)
        axios.get(`http://192.168.1.60:4000/team/getoneTeam/${parseInt(id)}`, values).then((res) => {
            setDatabyid(res.data.res)
            console.log(117, res);
        })
    }
    console.log(333, dataById)
    useEffect(() => {
        handleGetiD()
    }, []);

    //for team style
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

    //for card option highlight button click
    const [activeSort, setActiveSort] = useState(false);
    const [activePoint, setActivePoint] = useState(false);
    const [activeTeam, setActiveTeam] = useState(false);
    const [activeTime, setActiveTime] = useState(false);
    const [activeTeamOne, setActiveTeamOne] = useState(false);
    const [activeTeamTwo, setActiveTeamTwo] = useState(false);


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

    //for card option button click highlight functionality and navigating other page
    const handleSort = () => {
        setActiveSort(!activeSort)
    }

    const handlePoint = () => {
        setActivePoint(!activePoint)
        navigate("/game")
    }

    const handleTeam = () => {
        setActiveTeam(!activeTeam)
        navigate('/team')
    }

    const handleTime = () => {
        setActiveTime(!activeTime)
    }

    const handleTeamOne = () => {
        setActiveTeamOne(!activeTeamOne)
        navigate('/onlygame')
    }

    const handleTeamTwo = () => {
        setActiveTeamTwo(!activeTeamTwo)
    }


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
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, overflow: 'hidden' }}
            >
                <Link
                    sx={{ mt: '-50%', ml: '76%' }}
                    onClick={() => navigate("/notification")}
                    underline="hover"
                    color="#7569F1"
                    fontSize="20px"
                //border='1px solid red'


                >
                    <NotificationsNoneIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Custom Notifications
                </Link>
                <Divider />
                <Toolbar />
                <Box sx={{mt:'-6%'}}>
                <Cards />
                </Box>
                <Box
                    onClick={() => navigate("/addgame")}
                    sx={{
                        ml: '4%',
                        width: '94%',
                        height: '95px',
                        marginTop: '15%',
                        backgroundImage: `url(${img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '30px',
                    }}>

                    <Button onClick={() => navigate("/addgame")} sx={{ ml: '2%', mt: '2%', p: 1, width: '100%', borderRadius: '19px', fontWeight: 'bold !important', fontSize: "30px", color: 'white' }}><SportsEsportsIcon sx={{ width: '50px', height: '50px', color: 'white' }} />Add New Team</Button>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: '5%', ml: '5%' }}>
                    All Teams
                </Typography>
                <Grid container spacing={5} alignItems='center' >
                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: -4, lg: 0 } }}>
                        <Card className={classes.card}>
                            <Box
                                component="main"
                                sx={{ flexGrow: 1, color: 'black', p: 4 }}
                            >

                                <Button onClick={handleSort} sx={{ color: activeSort ? "#7569F1" : "black", fontSize: '15px', fontWeight: 'bold', mt: -3, ml: 0 }}>Sort by</Button>
                                <Button onClick={handlePoint} sx={{ color: activePoint ? "#7569F1" : "black", fontSize: '15px', fontWeight: 'bold', mt: -3, ml: 7 }}> Contest</Button>
                                <Button onClick={handleTeam} sx={{ color: activeTeam ? "#7569F1" : "#7569F1", fontSize: '15px', fontWeight: 'bold', mt: -3, ml: 7 }}> Team</Button>
                                <Button onClick={handleTeamOne} sx={{ color: activeTeamOne ? "#7569F1" : "black", fontSize: '15px', fontWeight: 'bold', mt: -3, ml: 7 }}>Games</Button>
                                {/* <Button onClick={handleTeamTwo} sx={{ color: activeTeamTwo ? "#7569F1" : "black", fontSize: '17px', fontWeight: 'bold', mt: -3, ml: 7 }}>xyz</Button> */}
                                <Button onClick={handleTime} sx={{ color: activeTime ? "#7569F1" : "black", fontSize: '15px', fontWeight: 'bold', mt: -3, ml: 7 }}>Time</Button>
                                <Box >
                                    <Grid container justifyContent="center">
                                        <Grid display='flex' item xs={6}>
                                            <Box sx={{ mt: -8.5, ml: 53 }}>
                                                <TextField value={newId} onChange={(e) => setNewId(e.target.value)} sx={{ minWidth: 200, m: 2, mt: 1 }} label="Search" type='text' variant="standard" />
                                                <Button onClick={() => handleGetiD(newId)} sx={{ color: 'black', mt: -12, ml: 21, border: 'none' }}><SearchIcon /></Button>
                                            </Box>
                                            <Button sx={{ mt: -9, ml: 0, fontSize: '30px', color: '#7569F1' }} ><TuneIcon /></Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Divider sx={{ border: '1px solid black', width: '106%', ml: '-3%', mt: -2 }} />
                                <Toolbar />
                                <Box
                  sx={{
                    ml: "-3%",
                    mt: "-5%",
                    width: "72vw",
                    height: 330,
                    bgcolor: "background.paper",
                    //border:'1px solid green'
                  }}
                >
                  <FixedSizeList
                    height={500}
                    width="74.5vw"
                    itemSize={1}
                    itemCount={1}
                    overscanCount={1}
                    borderRadius="30px !important"
                  >
                    {RenderRow}
                  </FixedSizeList>
                </Box>


                                {/* for api needed code */}
                                {/* <Box
                                    sx={{ ml: '-2.2%', mt: '-6%', width: '105%', height: 510, bgcolor: 'background.paper' }}
                                >
                                    {
                                        dataById ?
                                            <div>
                                                <Box
                                                    sx={{
                                                        height: '68px',
                                                        width: '98.9%',
                                                        marginTop: '0.3%',
                                                        marginLeft: '0.8%',
                                                        backgroundImage: `url(${backImg})`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover',
                                                        borderRadius: '40px',
                                                        display: 'flex'
                                                    }}>
                                                    <Box>
                                                        <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1, ml: 2 }} src={dataById.teamIcon} /></Box>
                                                    <Box>
                                                        <Typography variant='body2' sx={{ fontWeight: 'bold', ml: 5, mt: 1 }}>{dataById.team_name}
                                                            <br /><Typography variant='caption'>gametypeId:{dataById.gameTypeId}</Typography><br />
                                                        </Typography>
                                                        <Box sx={{ ml: 45, mt: -6 }}>
                                                            <Typography variant='subtitle2' >
                                                                Game Played:{dataById.totalMatchesPlayed}
                                                                <Typography variant='subtitle2'>matchesWon:{dataById.matchesWon}</Typography>
                                                                <Typography variant='caption'>matchesLoss:{dataById.matchesLoss},</Typography>&nbsp;
                                                                <Typography variant='caption'>drawMatches:{dataById.drawMatches}</Typography>
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ ml: 85, mt: -6, }}>  <Button sx={{ height: '40px', width: '150px', borderRadius: '20px', border: '1px solid black', color: 'black' }}>View Profile</Button></Box>
                                                    </Box>


                                                </Box>
                                            </div> :
                                            <List scrollBehavior="smooth">
                                                <ListItem component="div" disablePadding>

                                                    {
                                                        data &&
                                                        data.map((res) => {
                                                            return (
                                                                <>
                                                                    <Box
                                                                        sx={{
                                                                            height: '68px',
                                                                            width: '98.9%',
                                                                            marginTop: '0.3%',
                                                                            marginLeft: '0.8%',
                                                                            backgroundImage: `url(${backImg})`,
                                                                            backgroundRepeat: 'no-repeat',
                                                                            backgroundSize: 'cover',
                                                                            borderRadius: '40px',
                                                                            display: 'flex'
                                                                        }}>
                                                                        <Box>
                                                                            <Avatar alt="Remy Sharp" sx={{ height: '53px', width: '53px', mt: 1, ml: 2 }} src={res.teamIcon} /></Box>
                                                                        <Box>
                                                                            <Typography variant='body2' sx={{ fontWeight: 'bold', ml: 5, mt: 1 }}>{res.team_name}
                                                                                <br /><Typography variant='caption'>gametypeId:{res.gameTypeId}</Typography><br />
                                                                            </Typography>
                                                                            <Box sx={{ ml: 45, mt: -6 }}>
                                                                                <Typography variant='subtitle2' >
                                                                                    Game Played:{res.totalMatchesPlayed}
                                                                                    <Typography variant='subtitle2'>matchesWon:{res.matchesWon}</Typography>
                                                                                    <Typography variant='caption'>matchesLoss:{res.matchesLoss},</Typography>&nbsp;
                                                                                    <Typography variant='caption'>drawMatches:{res.drawMatches}</Typography>
                                                                                </Typography>
                                                                            </Box>
                                                                            <Box sx={{ ml: 85, mt: -6, }}>  <Button sx={{ height: '40px', width: '150px', borderRadius: '20px', border: '1px solid black', color: 'black' }}>View Profile</Button></Box>
                                                                        </Box>


                                                                    </Box>
                                                                </>
                                                            )
                                                        })

                                                    }

                                                </ListItem>
                                            </List>

                                    }

                                </Box> */}

                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}