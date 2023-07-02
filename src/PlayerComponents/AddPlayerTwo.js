import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import GridViewIcon from "@mui/icons-material/GridView";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import drill from "../assets/images/DashboardImage/drill.png";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import axios from "axios";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import AddPlayerTwoCSS from "../assets/styles/PlayerStyles/AddPlayerTwo.Style";
import Backdrop from "@mui/material/Backdrop";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import "../index.css";

//for drawer line
const drawerWidth = 240;

//for addplayertwo style
const useStyles = makeStyles(AddPlayerTwoCSS);

export default function AddPlayerTwo(props) {
  //for addplayertwo style
  const classes = useStyles();

  //for Navigate page
  const navigate = useNavigate();

  //for textfield states
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [strike, setStrike] = useState("");
  const [match, setMatch] = useState("");
  const [credit, setCredit] = useState("");
  const [team, setTeam] = useState("");

  //for submit form and backdrop functionality
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
    console.log(name, type, age, strike, match, credit, team);
    const data = {
      playerName: name,
      playerType: type,
      age: age,
      strikeRate: strike,
      totalMatchesPlayed: match,
      creditPoints: credit,
      teamId: team,
    };
    axios
      .post("http://192.168.1.60:4000/player/addPlayer", data)
      .then((res) => {
        console.log(100, res);
        // alert("Registered Successfully");
        if (res.status === 200) {
          // localStorage.setItem('playerName', name)
          // localStorage.setItem('playerType', type)
          // localStorage.setItem('age', age)
          // localStorage.setItem('strikeRate', strike)
          // localStorage.setItem('totalMatchesPlayed', match)
          // localStorage.setItem('creditPoints', credit)
          // localStorage.setItem('teamId', team)
        }
      });
  };

  //for sidebar option  states
  const [activeDash, setActiveDash] = useState(false);
  const [activeGame, setActiveGame] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activePlayer, setActivePlayer] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeLog, setActiveLog] = useState(false);

  //for admin slider functionality
  const [heme, setHeme] = useState(0);
  const handleClick = () => {
    setHeme(!heme);
  };

  //for button active highlight
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

  //for image upload functionality
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
      <div className="toggle-slide" onClick={handleClick}>
        <div
          style={{ color: " #7569F1", padding: "8%", fontWeight: "bold" }}
          className={`switch ${heme ? "slide " : ""}`}
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
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 7 }}
      >
        <Divider />
        <Toolbar />

        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", mt: "-6%", ml: "-1%" }}
        >
          Add New Player Details Here
        </Typography>

        <Grid container spacing={5} alignItems="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            sx={{ mb: "4%", mt: { xs: -4, lg: 0 } }}
          >
            <Card className={classes.card1}>
              <Stack direction="row" spacing={2} sx={{ ml: 0, mt: 1 }}>
                <Button
                  onClick={() => navigate("/addplayerone")}
                  sx={{ ml: 1, color: "black", fontSize: "12.7px" }}
                >
                  Select Game
                </Button>
                <Button
                  onClick={() => navigate("/addplayertwo")}
                  variant="contained"
                  sx={{
                    m: 1,
                    ml: 3,
                    fontSize: "12.7px",
                    backgroundColor: "#7569F1",
                    color: "white",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Add Players Info
                </Button>
              </Stack>
            </Card>

            <Paper
              className={classes.card2}
              sx={{
                pt: 1,
                margin: "auto",
                // maxWidth: 1000,
                // maxHeight: 1000,
                flexGrow: 1,
                //border: "1px solid red",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1 },
                      ml: 0,
                      minWidth: "25vw",
                      mr: "-60%",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{ width: "60%" }}
                      id="standard-basic"
                      label="Enter Player Name"
                      variant="standard"
                    />
                    <TextField
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      sx={{ width: "60%" }}
                      id="standard-basic"
                      label="Enter Player Type"
                      variant="standard"
                    />
                    <br />
                    <TextField
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      sx={{ width: "29.2%" }}
                      id="standard-basic"
                      label="Player Age"
                      type="number"
                      variant="standard"
                    />
                    <TextField
                      value={strike}
                      onChange={(e) => setStrike(e.target.value)}
                      sx={{ width: "29.2%" }}
                      id="standard-basic"
                      label="Player strikeRate"
                      type="number"
                      variant="standard"
                    />
                    <br />
                    <TextField
                      value={team}
                      onChange={(e) => setTeam(e.target.value)}
                      sx={{ width: "19%" }}
                      id="standard-basic"
                      label=" Player TeamId"
                      type="number"
                      variant="standard"
                    />
                    <TextField
                      value={credit}
                      onChange={(e) => setCredit(e.target.value)}
                      sx={{ width: "19%" }}
                      id="standard-basic"
                      label=" Player creditPoints"
                      type="number"
                      variant="standard"
                    />
                    <TextField
                      value={match}
                      onChange={(e) => setMatch(e.target.value)}
                      sx={{ width: "19%" }}
                      id="standard-basic"
                      label=" Player totalMatchesPlayed"
                      type="number"
                      variant="standard"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm container>
                  <Grid item xs container spacing={0}>
                    <Grid item>
                      <Card className={classes.card3}>
                        <Box sx={{ml:5}}>
                          <Typography
                            sx={{ mt: 3 }}
                            variant="h6"
                            gutterBottom
                          >
                            Upload Players Image
                          </Typography>
                        </Box>
                        <Box sx={{ml:8}}>
                          <Button
                            variant="contained"
                            sx={{
                              
                              borderRadius: "20px",
                              backgroundColor: "#7569F1",
                              fontWeight: "bold",
                            }}
                            component="label"
                          >
                            Upload Image
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                              src={file}
                              onChange={handleChange}
                            />
                          </Button>
                        </Box>
                        <Box sx={{ml:11}}>
                          <Typography
                            sx={{ fontSize: "15px" }}
                            display="block"
                            gutterBottom
                          >
                            or Drag & Drop
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Button
                      onClick={handleToggle}
                      variant="contained"
                      sx={{
                        mt: 24,
                        ml: "-10%",
                        width: "140px",
                        p: 1,
                        fontSize: "18px",
                        backgroundColor: "#7569F1",
                        borderRadius: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Add
                    </Button>
                    <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open={open}
                      // onClick={handleClose}
                    >
                      <Card
                        sx={{
                          minWidth: 400,
                          height: 150,
                          borderRadius: "20px",
                          mt: "-28%",
                        }}
                      >
                        <Typography
                          display="flex"
                          sx={{ mt: 4, fontSize: 20, ml: 6 }}
                          color="black"
                          gutterBottom
                        >
                          New Player Added{" "}
                          <Typography
                            sx={{ fontSize: 20, color: "green", ml: 1 }}
                          >
                            Successfully
                          </Typography>
                        </Typography>
                        <CardActions>
                          <Button
                            onClick={() => navigate("/players")}
                            variant="contained"
                            sx={{
                              width: "60%",
                              p: 1,
                              ml: 8,
                              fontSize: "18px",
                              backgroundColor: "#7569F1",
                              color: "white",
                              borderRadius: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            Home
                          </Button>
                        </CardActions>
                      </Card>
                    </Backdrop>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
