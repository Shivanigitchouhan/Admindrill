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
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import CircleIcon from '@mui/icons-material/Circle';
import PlayersProfileCSS from '../assets/styles/PlayerStyles/PlayersProfile.Style';
import img from '../assets/images/DashboardImage/virat.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import '../index.css';

//for drawer line
const drawerWidth = 240;

//for playerprofile style
const useStyles = makeStyles(PlayersProfileCSS);


function renderRow() {

    return (
        <ListItem component="div" disablePadding>
            <ListItemButton>
                <ListItemText sx={{ mt: '-2%' }}>
                    <Link variant="body1" href="#" sx={{ ml: '2%', color: "black", textDecoration: 'none' }}>
                        <Typography>West Indies vs India at Kingston - June 20 - 23, 2011</Typography>
                    </Link>
                    <Link variant="body1" href="#" sx={{ ml: '16%', color: "black", textDecoration: 'none' }}>
                        <Typography>India vs Australia at Ahmedabad - March 09 - 13, 2023</Typography>
                    </Link>
                    <Link variant="body1" href="#" sx={{ ml: '2%', color: "black", textDecoration: 'none' }}>
                        <Typography>Sri Lanka vs India at Dambulla - August 18, 2008</Typography>
                    </Link>
                    <Link variant="body1" href="#" sx={{ ml: '2%', color: "black", textDecoration: 'none' }}>
                        <Typography>India vs Australia at Chennai - March 22, 2023</Typography>
                    </Link>
                    <Link variant="body1" href="#" sx={{ ml: '2%', color: "black", textDecoration: 'none' }}>
                        <Typography>Zimbabwe vs India at Harare - June 12, 2010</Typography>
                    </Link>
                    <Link variant="body1" href="#" sx={{ ml: '2%', color: "black", textDecoration: 'none' }}>
                        <Typography> India vs England at Adelaide - November 10, 2022</Typography>
                    </Link>
                    <Link variant="body1" href="#" sx={{ ml: '2%', color: "black", textDecoration: 'none' }}>
                        <Typography>  Tamil Nadu vs Delhi at Delhi - November 23 - 26, 2006</Typography>
                    </Link>
                    <Link variant="body1" href="#" sx={{ ml: '2%', color: "black", textDecoration: 'none' }}>
                        <Typography>  India vs Australia at Ahmedabad - March 09 - 13, 2023</Typography>
                    </Link>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}


export default function PlayersProfile(props) {


    //for playerprofile style
    const classes = useStyles();


    //for Navigate page
    const navigate = useNavigate();


    //for getitem from localstorage
    //let name = localStorage.getItem('playerName')
    let name = localStorage.getItem('firstName')
    let age = localStorage.getItem('age')
    let type = localStorage.getItem("playerType");
    let strike = localStorage.getItem("strikeRate");
    let lastName = localStorage.getItem("lastName");




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

    //for sort by menu functionality
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //for image upload
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


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
            <div className="toggle-slide" onClick={handleOpen}>
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
                sx={{ ml: 1, flexGrow: 1, bgcolor: 'background.default', p: 5, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Divider />
                <Toolbar />

                <Paper
                    elevation={0}
                    sx={{
                        p: 3,
                        //border:'1px solid red',
                        marginLeft: '2%',
                        maxWidth: 1027,
                        flexGrow: 1,
                        mt: '-7%',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        Player Profile
                                    </Typography>
                                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                                        Personal Information
                                    </Typography>
                                    <Box >
                                        <Box display='flex'>
                                            <Typography gutterBottom variant="subtitle1" component="div" >
                                                UserName  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;:
                                            </Typography>
                                            <Typography sx={{ ml: 4, fontSize: '18px', color: 'black' }}>{name}&nbsp;{lastName}</Typography>
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
                                <Stack direction="row" spacing={11} sx={{ mt: 33, ml: -36 }}>
                                    <Button variant="contained" sx={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold' }} startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                    <Button variant="contained" sx={{ color: 'white', fontWeight: 'bold', backgroundColor: '#7569F1', width: '42%', }} endIcon={<EditIcon />}>
                                        Edit
                                    </Button>
                                </Stack>
                            </ButtonBase>
                        </Grid>

                    </Grid>
                </Paper>


                <Grid container spacing={5} alignItems='center' >

                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: -4, lg: 0 } }}>
                        <Card className={classes.card1}>
                            <Typography display='flex' variant="text" gutterBottom sx={{ mt: '1%', ml: '2%' , fontWeight: 'bold !important',}}>
                                Game History
                                <Grid
                                    xs={12}
                                    lg={8}
                                    className={classes.grid}>
                                    <Button
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        variant="text" className={classes.addBtn} >Sort by
                                    </Button>
                                </Grid>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    sx={{ ml: '-7%', mt: -1 }}
                                >
                                    <MenuItem >Newest First</MenuItem>
                                    <MenuItem > Oldest First</MenuItem>
                                    <MenuItem >Win First</MenuItem>
                                    <MenuItem >T20 First</MenuItem>
                                    <MenuItem >Test Matches First</MenuItem>
                                    <MenuItem >ODI Matches First</MenuItem>
                                    <MenuItem >T20I Matches First</MenuItem>
                                    <MenuItem >FC Matches</MenuItem>

                                </Menu>
                            </Typography>
                        </Card>

                        <Box
                            sx={{ border: '1px solid gray', minWidth: '70vw', ml: '5%', height: 300, bgcolor: 'background.paper' }}
                        >
                            <FixedSizeList
                                height={298}
                                minWidth='50vw'
                                itemSize={1}
                                itemCount={1}
                                overscanCount={1}
                            >
                                {renderRow}
                            </FixedSizeList>
                        </Box>

                    </Grid>

                </Grid>


                <Grid container spacing={5} alignItems='center' >

                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: -4, lg: 0 } }}>
                        <Card className={classes.card}>
                            <Typography variant="h6" gutterBottom sx={{ mt: '1%', ml: '2%', fontWeight: 'bold !important',}}>
                                Teams(Optional)
                            </Typography>
                        </Card>

                        <Box
                            sx={{ border: '1px solid gray', minWidth: '70vw', ml: '5%', height: 300, bgcolor: 'background.paper' }}
                        >
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3, }} />&nbsp;&nbsp;India</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;Delhi</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;India A </Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;India Blue</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;India Emerging Players</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;India Red</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;India Under-19s</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;Indian Board President's XI</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;North Zone</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;Oil & Natural Gas Corporation</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;Rest of India</Typography>
                            </Link>
                            <Link variant="body1" href="#" sx={{ color: "black", textDecoration: 'none' }}>
                                <Typography><CircleIcon sx={{ fontSize: '10px',ml:3 }} />&nbsp;&nbsp;Royal Challengers Bangalore</Typography>
                            </Link>
                        </Box>

                    </Grid>

                </Grid>

            </Box>

        </Box>
    );
}