import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { ListItem } from "react-scrollable-accordion";
import List from "@mui/material/List";
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
import Divider from "@mui/material/Divider";
import img from "../../assets/images/DashboardImage/Rectangle.png";
import { Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PlayerCSS from "../../assets/styles/PlayerStyles/Player.Style";
import SearchIcon from "@mui/icons-material/Search";
// import TuneIcon from '@mui/icons-material/Tune';
// import Avatar from '@mui/material/Avatar';
// import backImg from '../../assets/images/DashboardImage/backImg.png'
import avtr1 from "../../assets/images/AvtarImages/avtr1.png";
import "../../../src/index.css";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { FixedSizeList } from "react-window";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import avtr12 from "../../assets/images/AvtarImages/avtr12.png";
import axios from "axios";

//for drawer line
const drawerWidth = 240;

//for player style
const useStyles = makeStyles(PlayerCSS);

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

export default function Player(props) {
  //for getAllPlayers Api functionality
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://192.168.1.60:4000/player/getPlayers")
      .then((res) => {
        setData(res.data.Data);
      })
      .then((resp) => {
        console.log(57, resp);
      });
  }, []);

  //for updateplayer functionality
  const [updateValue, setUpdateValue] = useState();
  const [updateValueTwo, setUpdateValueTwo] = useState();

  const values = {
    firstName: updateValueTwo,
    lastName: updateValue,
  };

  //for getOnePlayerbyId functionality
  const [newId, setNewId] = useState("");
  const [dataById, setDatabyid] = useState("");

  const handleGetiD = async (id) => {
    console.log(111, id);
    axios
      .get(
        `http://192.168.1.60:4000/player/getPlayerById/${parseInt(id)}`,
        values
      )
      .then((res) => {
        setDatabyid(res.data.Data);
        console.log(118, res);
      });
  };
  console.log(333, dataById);
  useEffect(() => {
    handleGetiD();
  }, []);

  //for player style
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

  //for card option states
  const [activeSort, setActiveSort] = useState(false);
  const [activePoint, setActivePoint] = useState(false);
  const [activeTeam, setActiveTeam] = useState(false);
  const [activeSeason, setActiveSeason] = useState(false);

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
    navigate("/onlygame");
  };

  const handleTeam = () => {
    setActiveTeam(!activeTeam);
  };

  const handleSeason = () => {
    setActiveSeason(!activeSeason);
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
            color: activePlayer ? "#7569F1" : "#7569F1",
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

      <Box
        //border='1px solid red'
        component="main"
        className={classes.box3}
      >
        {/* <Divider /> */}
        {/* <Toolbar /> */}

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

        <Paper
          elevation={0}
          sx={{
            p: 3,
            marginLeft: "0px",
            maxWidth: 1200,
            height: "80vh",
            flexGrow: 1,
            mt: 1,
            //border:'1px solid red',
            // border: 'none !important',
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", mt: -1 }}
                >
                  Player's
                </Typography>
              </Grid>

              <Grid
                item
                container
                spacing={2}
                className={classes.box4}
                sx={{
                  mt: 2,
                  ml: 1.5,
                  backgroundImage: `url(${img})`,
                }}
              >
                <Grid container item xs={12} lg={8} className={classes.grid}>
                  <Button
                    onClick={() => navigate("/addplayerone")}
                    className={classes.addBtn}
                  >
                    <SportsHandballIcon className={classes.sportIcon} />
                    Add New Player
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

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
                    className={classes.PointBtn}
                    sx={{ color: activePoint ? "#7569F1" : "black" }}
                  >
                    Game
                  </Button>
                  <Button
                    onClick={handleTeam}
                    className={classes.teamBtn}
                    sx={{ color: activeTeam ? "#7569F1" : "#7569F1" }}
                  >
                    Total players
                  </Button>
                  <Button
                    onClick={handleSeason}
                    className={classes.seasonBtn}
                    sx={{ color: activeSeason ? "#7569F1" : "black" }}
                  >
                    Season
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
                  sx={{
                    ml: "1%",
                    mt: "1%",
                    width: "73vw",
                    height: 330,
                    bgcolor: "background.paper",
                    //border:'1px solid green'
                  }}
                >
                  <FixedSizeList
                    height={350}
                    width="76vw"
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
                                    className={classes.box7}
                            
                                >
                                    {
                                        dataById ?
                                            <div>

                                                <Paper
                                                    elevation={0}
                                                    sx={{
                                                        m: 1,
                                                        flexGrow: 1,
                                                        border: '1px solid gray',
                                                        borderRadius: '40px',
                                                        backgroundColor: (theme) =>
                                                            theme.palette.mode === 'dark' ? '#e8eaf6' : '#e8eaf6',
                                                    }}
                                                >

                                                    <Grid container spacing={2}>
                                                        <Grid item>
                                                            <ButtonBase sx={{ width: '55px', height: '65px', mt: '12%', ml: '50%' }}>
                                                        
                                                                <Img alt="Remy Sharp" src={avtr1} />
                                                            </ButtonBase>
                                                        </Grid>
                                                        <Grid item xs={12} sm container>
                                                            <Grid item xs container direction="column" spacing={2}>
                                                                <Grid item xs>
                                                                    <Typography gutterBottom variant="caption" component="div" sx={{ fontWeight: 'bold !important', mt: 2, ml: 4 }}>
                                                                        {dataById.playerName}
                                                                    </Typography>
                                                                    <Typography variant='caption' sx={{ ml: 4 }} >PlayerType:{dataById.playerType}</Typography>
                                                                </Grid>
                                                                <Grid item xs sx={{ ml: 45, mt: -11 }}>
                                                                    <Typography variant="caption" gutterBottom>
                                                                        Game Played:{dataById.totalMatchesPlayed}
                                                                    </Typography><br />
                                                                    <Typography variant="caption" gutterBottom>
                                                                        strikeRate:{dataById.strikeRate}
                                                                    </Typography><br />
                                                                    <Typography variant="caption" gutterBottom>
                                                                        creditPoints:{dataById.creditPoints}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button onClick={() => navigate('/playersprofile')} className={classes.viewBtn} sx={{ m: 3.5, mt: 2.5 }} >View Profile</Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    
                                                </Paper>
                                            </div> :
                                            <List scrollBehavior="smooth">
                                                <ListItem component="div" disablePadding>

                                                    {
                                                        data &&
                                                        data.map((res) => {
                                                            return (
                                                                <>
                                                                    <Paper
                                                                        elevation={0}
                                                                        sx={{                                    
                                                                            m: 1,
                                                                            flexGrow: 1,
                                                                            border: '1px solid gray',
                                                                            borderRadius: '40px',
                                                                            backgroundColor: (theme) =>
                                                                                theme.palette.mode === 'dark' ? '#e8eaf6' : '#e8eaf6',
                                                                           

                                                                        }}
                                                                    >
                                                                        
                                                                        <Grid container spacing={2}>
                                                                            <Grid item>
                                                                                <ButtonBase sx={{ width: '55px', height: '65px', mt: '12%', ml: '50%' }}>
                                                                                    
                                                                                    <Img alt="Remy Sharp" src={avtr1} />
                                                                                </ButtonBase>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm container>
                                                                                <Grid item xs container direction="column" spacing={2}>
                                                                                    <Grid item xs>
                                                                                        <Typography gutterBottom variant="caption" component="div" sx={{ fontWeight: 'bold !important', mt: 2, ml: 4 }}>
                                                                                            {res.playerName}
                                                                                        </Typography>
                                                                                        <Typography variant='caption' sx={{ ml: 4 }} >PlayerType:{res.playerType}</Typography>
                                                                                    </Grid>
                                                                                    <Grid item xs sx={{ ml: 45, mt: -11 }}>
                                                                                        <Typography variant="caption" gutterBottom>
                                                                                            Game Played:{res.totalMatchesPlayed}
                                                                                        </Typography><br />
                                                                                        <Typography variant="caption" gutterBottom>
                                                                                            strikeRate:{res.strikeRate}
                                                                                        </Typography><br />
                                                                                        <Typography variant="caption" gutterBottom>
                                                                                            creditPoints:{res.creditPoints}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                                <Grid item>
                                                                                    <Button onClick={() => navigate('/playersprofile')} className={classes.viewBtn} sx={{ m: 3.5, mt: 2.5 }} >View Profile</Button>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Grid>
                                                                        
                                                                    </Paper>

                                                                </>
                                                            )
                                                        })

                                                    }


                                                </ListItem>
                                            </List>
                                    }

                                </Box> */}
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
