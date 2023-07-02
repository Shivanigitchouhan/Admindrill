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
import Divider from "@mui/material/Divider";
import sign from "../assets/images/DashboardImage/sign.png";
import clip from "../assets/images/DashboardImage/clip.png";
import UserCountCSS from "../assets/styles/UsersStyle/UserCount.style";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import "../index.css";

//for drawer line
const drawerWidth = 240;

//for usercount style
const useStyles = makeStyles(UserCountCSS);

export default function UserCount(props) {
  //for usercount style
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
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Divider />
        <Toolbar />
        
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", mt: "-3%", ml: "2%" }}
        >
          Team Created
        </Typography>

        <Box
          onClick={() => navigate("/usergame")}
          sx={{
            height: "95px",
            width: "90%",
            marginTop: "2%",
            marginLeft: "2%",
            border: "1px solid gray",
            borderRadius: "20px",
            display: "flex",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
              Dragon War
            </Typography>
            <Box sx={{ ml: 20, mt: -5 }}>
              <img width="80px" height="70px" src={sign} />
            </Box>
          </Box>
          <Box sx={{ ml: 15 }}>
            <Typography
              variant="h6"
              sx={{ color: "#EC294C", fontWeight: "bold" }}
            >
              Live
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: -4 }}>
              5CR Prize Money
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "#7569F1", ml: -7 }}>
              2,38,378 people are playing
            </Typography>

            <Box sx={{ mt: -8, ml: 25 }}>
              <img width="70px" height="70px" src={clip} />
              <Typography variant="h6" sx={{ ml: 15, mt: -7 }}>
                Super Stars
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 0, ml: 23 }}>
            <Button
              onClick={() => navigate("/usergame")}
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#7569F1",
                height: "25px",
                width: "100px",
                fontWeight: "bold",
                borderRadius: "0px 20px 0px 20px",
                fontSize: "14px",
              }}
            >
              Team 1
            </Button>
          </Box>
        </Box>

        <Box
          onClick={() => navigate("/usergame")}
          sx={{
            height: "95px",
            width: "90%",
            marginTop: "2%",
            marginLeft: "2%",
            border: "1px solid gray",
            borderRadius: "20px",
            display: "flex",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
              Dragon War
            </Typography>
            <Box sx={{ ml: 20, mt: -5 }}>
              <img width="80px" height="70px" src={sign} />
            </Box>
          </Box>
          <Box sx={{ ml: 15 }}>
            <Typography
              variant="h6"
              sx={{ color: "#EC294C", fontWeight: "bold" }}
            >
              Live
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: -4 }}>
              5CR Prize Money
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "#7569F1", ml: -7 }}>
              2,38,378 people are playing
            </Typography>

            <Box sx={{ mt: -8, ml: 25 }}>
              <img width="70px" height="70px" src={clip} />
              <Typography variant="h6" sx={{ ml: 15, mt: -7 }}>
                Super Stars
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 0, ml: 23 }}>
            <Button
              onClick={() => navigate("/usergame")}
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#7569F1",
                height: "25px",
                width: "100px",
                fontWeight: "bold",
                borderRadius: "0px 20px 0px 20px",
                fontSize: "14px",
              }}
            >
              Team 2
            </Button>
          </Box>
        </Box>
        <Box
          onClick={() => navigate("/usergame")}
          sx={{
            height: "95px",
            width: "90%",
            marginTop: "2%",
            marginLeft: "2%",
            border: "1px solid gray",
            borderRadius: "20px",
            display: "flex",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
              Dragon War
            </Typography>
            <Box sx={{ ml: 20, mt: -5 }}>
              <img width="80px" height="70px" src={sign} />
            </Box>
          </Box>
          <Box sx={{ ml: 15 }}>
            <Typography
              variant="h6"
              sx={{ color: "#EC294C", fontWeight: "bold" }}
            >
              Live
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: -4 }}>
              5CR Prize Money
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "#7569F1", ml: -7 }}>
              2,38,378 people are playing
            </Typography>

            <Box sx={{ mt: -8, ml: 25 }}>
              <img width="70px" height="70px" src={clip} />
              <Typography variant="h6" sx={{ ml: 15, mt: -7 }}>
                Super Stars
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 0, ml: 23 }}>
            <Button
              onClick={() => navigate("/usergame")}
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#7569F1",
                height: "25px",
                width: "100px",
                fontWeight: "bold",
                borderRadius: "0px 20px 0px 20px",
                fontSize: "14px",
              }}
            >
              Team 3
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
