import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { List } from "@mui/material";
import { ListItem } from "react-scrollable-accordion";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import GridViewIcon from "@mui/icons-material/GridView";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import drill from "../../assets/images/DashboardImage/drill.png";
import Button from "@mui/material/Button";
import Cards from "../../DashboardComponents/Cards";
import Divider from "@mui/material/Divider";
import { Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import axios from "axios";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import UsersCSS from "../../assets/styles/UsersStyle/Users.Style";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import Avatar from "@mui/material/Avatar";
import backImg from "../../assets/images/DashboardImage/backImg.png";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import "../../../src/index.css";
import { getUsers } from "../../Service/UserApi";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Carousel from "../../UserComponents/Carousel";

//for drawer line
const drawerWidth = 240;

//for user style
const useStyles = makeStyles(UsersCSS);

export default function Users(props) {
  //for user style
  const classes = useStyles();

  //for Navigate page
  const navigate = useNavigate();

  //for getAllUsers Api functionality
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    let response = await getUsers();
    setUser(response.data.data);
  };

  //For Updateuser Api Functionality
  // const [updateValue, setUpdateValue] = useState();
  // const [updateValueTwo, setUpdateValueTwo] = useState();

  // const values = {
  //     "firstName": updateValueTwo,
  //     "lastName": updateValue
  // }

  //for getOneuserebyId functionality

  const [newId, setNewId] = useState("");
  const [dataById, setDatabyid] = useState("");

  const handleGetiD = async (id) => {
    console.log(111, id);
    axios
      .get(`http://192.168.1.60:4000/users/getOneUser/${parseInt(id)}`)
      .then((res) => {
        setDatabyid(res.data.userData);
        console.log(118, res);
      });
  };
  console.log(333, dataById);
  useEffect(() => {
    handleGetiD();
  }, []);

  //for edit button functionality
  const [dataOne, setDataOne] = useState([]);
  console.log(172, user);

  const handleViewProfile = (id) => {
    console.log(174, id);
    setDataOne(user.filter((i) => i.id === id.id));
    navigate("/userprofile");
    console.log(178, id);
  };
  console.log(171, dataOne);

  //for sidebar highlight button click
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
  const [activeWinner, setActiveWinner] = useState(false);

  //for admin slider
  const [theme, setTheme] = useState(0);
  const handleOpen = () => {
    setTheme(!theme);
  };

  //for sidebar button click highlight functionality and navigating other page
  const handleDashClick = (event) => {
    setActiveDash(!activeDash);
    navigate("/dashboard");
  };
  const handleGameClick = (event) => {
    setActiveGame(!activeGame);
    navigate("/onlygame");
  };
  const handleUserClick = (event) => {
    setActiveUser(!activeUser);
    navigate("/users");
  };
  const handlePlayerClick = (event) => {
    setActivePlayer(!activePlayer);
    navigate("/players");
  };
  const handleProfileClick = (event) => {
    setActiveProfile(!activeProfile);
    navigate("/profile");
  };
  const handleLogClick = (event) => {
    setActiveLog(!activeLog);
    navigate("/");
  };

  //for card option button click highlight functionality and navigating other page
  const handleSort = () => {
    setActiveSort(!activeSort);
  };

  const handlePoint = () => {
    setActivePoint(!activePoint);
  };

  const handleTeam = () => {
    setActiveTeam(!activeTeam);
  };

  const handleWinner = () => {
    setActiveWinner(!activeWinner);
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
    <>
      <Box sx={{ display: "flex" }}>
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

        <Box component="main" className={classes.box3}>
          <Grid container spacing={2}>
            <Grid item sx={{ marginLeft: "auto", mt: 6 }}>
              <Link
                className={classes.customLink}
                onClick={() => navigate("/notification")}
                underline="hover"
              >
                <NotificationsNoneIcon className={classes.notification} />
                Custom Notifications
              </Link>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Cards />

          <Paper
            elevation={0}
            sx={{
              p: 3,
              marginLeft: "auto",
              maxWidth: 1200,
              height: "80vh",
              flexGrow: 1,
              mt: -7,
              // marginBottom:'-50% !important',
              //border:'1px solid red',
              // border: 'none !important',
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={5} alignItems="center">
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ mb: "4%", mt: { xs: -4, lg: 0 } }}
              >
                <Card className={classes.card}>
                  <Box
                    component="main"
                    //border='1px solid red'
                    className={classes.box5}
                  >
                    <Button
                      onClick={handleSort}
                      className={classes.sortBtn}
                      sx={{ color: activeSort ? "#7569F1" : "black" }}
                    >
                      Sort by
                    </Button>
                    <Button
                      onClick={handlePoint}
                      className={classes.joinBtn}
                      sx={{ color: activePoint ? "#7569F1" : "black" }}
                    >
                      Joining Time
                    </Button>
                    <Button
                      onClick={handleTeam}
                      className={classes.totalBtn}
                      sx={{ color: activeTeam ? "#7569F1" : "#7569F1" }}
                    >
                      Total Users
                    </Button>
                    <Button
                      onClick={handleWinner}
                      className={classes.topBtn}
                      sx={{ color: activeWinner ? "#7569F1" : "black" }}
                    >
                      Top Winners
                    </Button>
                    <TextField
                      value={newId}
                      onChange={(e) => setNewId(e.target.value)}
                      className={classes.serchfield}
                      label="Search"
                      type="text"
                      variant="standard"
                    />
                    <Button
                      onClick={() => handleGetiD(newId)}
                      className={classes.serchIcon}
                    >
                      <SearchIcon />
                    </Button>
                  </Box>

                  <Divider className={classes.divider} />

                  <Box
                    className={classes.box7}
                    //border='1px solid blue'
                  >
                    {dataById ? (
                      <div>
                        <Paper
                          elevation={0}
                          sx={{
                            m: 1,
                            flexGrow: 1,
                            border: "1px solid gray",
                            borderRadius: "40px",
                            backgroundColor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "#e8eaf6"
                                : "#e8eaf6",
                          }}
                        >
                          <Box
                            className={classes.box7}
                            //border='1px solid blue'
                          ></Box>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase
                                sx={{
                                  width: "55px",
                                  height: "65px",
                                  mt: "12%",
                                  ml: "50%",
                                }}
                              >
                                {/* <Avatar alt="Remy Sharp" src={avtr1} /> */}
                                <Img alt="Remy Sharp" src={dataById.avatar} />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                spacing={2}
                              >
                                <Grid item xs>
                                  <Typography
                                    gutterBottom
                                    variant="caption"
                                    component="div"
                                    sx={{
                                      fontWeight: "bold !important",
                                      mt: 2,
                                      ml: 4,
                                    }}
                                  >
                                    {dataById.first_name}&nbsp;
                                    {dataById.last_name}
                                  </Typography>
                                  <Typography variant="caption" sx={{ ml: 4 }}>
                                    PlayerType:Batsmen{dataById.playerType}
                                  </Typography>
                                </Grid>
                                <Grid item xs sx={{ ml: 45, mt: -11 }}>
                                  <Typography variant="caption" gutterBottom>
                                    Game Played:1000
                                    {dataById.totalMatchesPlayed}
                                  </Typography>
                                  <br />
                                  <Typography variant="caption" gutterBottom>
                                    strikeRate:500{dataById.strikeRate}
                                  </Typography>
                                  <br />
                                  <Typography variant="caption" gutterBottom>
                                    creditPoints:200{dataById.creditPoints}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Button
                                  onClick={() => navigate("/userprofile")}
                                  className={classes.viewBtn}
                                  sx={{ m: 3.5, mt: 2.5 }}
                                >
                                  View Profile
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                          {/* </Box> */}
                        </Paper>
                      </div>
                    ) : (
                      <List scrollBehavior="smooth">
                        <ListItem component="div" disablePadding>
                          {user &&
                            user.map((res) => {
                              return (
                                <>
                                  <Paper
                                    elevation={0}
                                    sx={{
                                      // p: -2,
                                      //marginTop: '2',
                                      m: 1,
                                      // Width: '55vw',
                                      //height:'55vh',
                                      flexGrow: 1,
                                      border: "1px solid gray",
                                      borderRadius: "40px",
                                      backgroundColor: (theme) =>
                                        theme.palette.mode === "dark"
                                          ? "#e8eaf6"
                                          : "#e8eaf6",
                                      // backgroundImage: `url(${backImg})`,
                                      // backgroundRepeat: 'no-repeat',
                                      // backgroundSize: 'cover',
                                    }}
                                  >
                                    {/* <Box
                                                                         className={classes.box8}
                                                                       
                                                                      > */}
                                    <Grid container spacing={2}>
                                      <Grid item>
                                        <ButtonBase
                                          sx={{
                                            width: "55px",
                                            height: "65px",
                                            mt: "12%",
                                            ml: "50%",
                                          }}
                                        >
                                          {/* <Avatar alt="Remy Sharp" src={avtr1} /> */}
                                          <Img
                                            alt="Remy Sharp"
                                            src={res.avatar}
                                          />
                                        </ButtonBase>
                                      </Grid>
                                      <Grid item xs={12} sm container>
                                        <Grid
                                          item
                                          xs
                                          container
                                          direction="column"
                                          spacing={2}
                                        >
                                          <Grid item xs>
                                            <Typography
                                              gutterBottom
                                              variant="caption"
                                              component="div"
                                              sx={{
                                                fontWeight: "bold !important",
                                                mt: 2,
                                                ml: 4,
                                              }}
                                            >
                                              {res.first_name}&nbsp;
                                              {res.last_name}
                                            </Typography>
                                            <Typography
                                              variant="caption"
                                              sx={{ ml: 4 }}
                                            >
                                              PlayerType:Batsmen{res.playerType}
                                            </Typography>
                                          </Grid>
                                          <Grid
                                            item
                                            xs
                                            sx={{ ml: 58, mt: -11 }}
                                          >
                                            <Typography
                                              variant="caption"
                                              gutterBottom
                                            >
                                              Game Played:1000
                                              {res.totalMatchesPlayed}
                                            </Typography>
                                            <br />
                                            <Typography
                                              variant="caption"
                                              gutterBottom
                                            >
                                              strikeRate:500{res.strikeRate}
                                            </Typography>
                                            <br />
                                            <Typography
                                              variant="caption"
                                              gutterBottom
                                            >
                                              creditPoints:200{res.creditPoints}
                                            </Typography>
                                          </Grid>
                                        </Grid>
                                        <Grid item>
                                          <Button
                                            onClick={() =>
                                              navigate("/userprofile")
                                            }
                                            className={classes.viewBtn}
                                            sx={{ m: 3.5, mt: 2.5 }}
                                          >
                                            View Profile
                                          </Button>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    {/* </Box> */}
                                  </Paper>
                                </>
                              );
                            })}
                        </ListItem>
                      </List>
                    )}
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Paper>

          {/* <Grid container item xs sx={{ fontWeight: 'bold', mt: 0, ml: 0 }}>
                        
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', mt: 3, ml: 6 }}>
                            Winners
                        </Typography>
                    </Grid> */}

          {/* <Box sx={{ width: "80%", marginLeft: "-30%" }}>
                        <Carousel />
                    </Box> */}
        </Box>
      </Box>
    </>
  );
}
