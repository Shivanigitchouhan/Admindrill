import React, { useState, useEffect } from "react";
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
import Divider from "@mui/material/Divider";
import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import UserProfileCSS from "../assets/styles/UsersStyle/UserProfile.Style";
import img from "../assets/images/DashboardImage/camera.png";
import user1 from "../assets/images/DashboardImage/userOne.png";
import user2 from "../assets/images/DashboardImage/userTwo.png";
import user3 from "../assets/images/DashboardImage/userThree.png";
import coin from "../assets/images/DashboardImage/coin.png";
import "../index.css";
import CardActions from "@mui/material/CardActions";
import { TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import ButtonBase from "@mui/material/ButtonBase";

//for drawer line
const drawerWidth = 240;

//for userprofile style
const useStyles = makeStyles(UserProfileCSS);

export default function UserProfile(props) {
  //for userprofile style
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
  const handleClick = () => {
    setTheme(!theme);
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

  //for userimage functionality
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
        sx={{
          ml: 1,
          flexGrow: 1,
          bgcolor: "background.default",
          p: 5,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Divider />
        <Toolbar />

        <Paper
          elevation={0}
          sx={{
            p: 3,
            //border:'1px solid red',
            margin: "auto",
            maxWidth: 1200,
            flexGrow: 1,
            ml: 1,
            mt: "-5%",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Personal Information
                  </Typography>
                  <Box>
                    <Box display="flex">
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;:
                      </Typography>
                      <Typography
                        sx={{ ml: 4, fontSize: "18px", color: "black" }}
                      >
                        moin saikh
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        UserName &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:
                      </Typography>
                      <Typography
                        sx={{ ml: 4, fontSize: "18px", color: "black" }}
                      >
                        moinsaikh
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Contact Number &nbsp; &nbsp;:
                      </Typography>
                      <Typography
                        sx={{ ml: 4, fontSize: "18px", color: "black" }}
                      >
                        +01XXXXX72
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;&nbsp;:
                      </Typography>
                      <Typography
                        sx={{ ml: 4, fontSize: "18px", color: "black" }}
                      >
                        abc@gmail.com
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Verification &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :
                      </Typography>
                      <Typography
                        sx={{ ml: 4, fontSize: "18px", color: "#2EAC1A" }}
                      >
                        Verified
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ButtonBase sx={{ width: 300, height: 250, mt: -3, ml: -1 }}>
                <Img alt="complex" src={img} />
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    ml: -9,
                    mt: -22,
                    height: 25,
                    borderRadius: "0px 10px 0px 10px",
                    border: "1px solid white",
                    backgroundColor: "#7569F1",
                    fontWeight: "bold",
                  }}
                >
                  Change
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </ButtonBase>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            margin: "auto",
            maxWidth: 1000,
            flexGrow: 1,
            ml: 1,
            mt: -3,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold", mt: "1%", ml: "-0.10%" }}
                  >
                    Account Deatils
                  </Typography>

                  <Box>
                    <Box display="flex">
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Account No. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:
                      </Typography>
                      <Typography
                        sx={{ ml: 4, fontSize: "18px", color: "black" }}
                      >
                        xxxxxxxxx736
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        IFCI Code &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;:
                      </Typography>
                      <Typography
                        sx={{ ml: 4, fontSize: "18px", color: "black" }}
                      >
                        SHOxxxxxxxxx23
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Pay Mathod &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:
                      </Typography>
                      <Typography
                        sx={{ ml: 4, fontSize: "18px", color: "black" }}
                      >
                        Upi/Paytm/Phone Pay
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Verification &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :
                      </Typography>
                      <Typography
                        sx={{ ml: 4, fontSize: "18px", color: "#2EAC1A" }}
                      >
                        Verified
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="h5" gutterBottom className={classes.text2}>
          More Info
        </Typography>
        <Box component="section" sx={{ mt: 6, mb: -8, ml: 1 }}>
          <Container>
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
                  <Box>
                    <img
                      Width="305px"
                      height="246px"
                      style={{ marginLeft: "-1%" }}
                      src={user1}
                    />
                    <Button
                      onClick={() => navigate("/userhistory")}
                      variant="text"
                      className={classes.historyBtn}
                    >
                      History
                    </Button>
                    <Typography className={classes.type1}>500</Typography>
                    <Typography className={classes.type2}>
                      Game Played
                    </Typography>
                  </Box>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ mb: "4%", mt: { xs: 4, lg: 0 } }}
              >
                <Card className={classes.card2}>
                  <Box>
                    <img
                      Width="305px"
                      height="246px"
                      style={{ marginLeft: "-1%" }}
                      src={user2}
                    />
                    <Button
                      onClick={() => navigate("/userwallet")}
                      variant="text"
                      className={classes.historyBtn2}
                    >
                      History
                    </Button>
                    <Typography className={classes.type3}>$5,00/-</Typography>
                    <Typography className={classes.type4}> Wallet</Typography>
                  </Box>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ mb: "4%", mt: { xs: 4, lg: 0 } }}
              >
                <Card className={classes.card3}>
                  <Box>
                    <img
                      Width="305px"
                      height="246px"
                      style={{ marginLeft: "-1%" }}
                      src={user3}
                    />
                    <Button
                      onClick={() => navigate("/userdrill")}
                      variant="text"
                      className={classes.historyBtn3}
                    >
                      History
                    </Button>
                    <Typography className={classes.type5}>
                      <img style={{ marginLeft: "-13%" }} src={coin} />
                      5,000
                    </Typography>
                    <Typography className={classes.type6}>
                      Drill Coins
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
