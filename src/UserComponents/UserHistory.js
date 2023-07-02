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
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import TuneIcon from "@mui/icons-material/Tune";
import Avatar from "@mui/material/Avatar";
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import backImg from "../assets/images/DashboardImage/backImg.png";
import avtr6 from "../assets/images/AvtarImages/avtr6.png";
import UserHistoryCSS from "../assets/styles/UsersStyle/UserHistory.Style";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import "../index.css";

//for drawer line
const drawerWidth = 240;

//for userhistory style
const useStyles = makeStyles(UserHistoryCSS);

//for static list data
function RenderRow() {
  const navigate = useNavigate();

  return (
    <ListItem component="div" disablePadding>
      <ListItemButton>
        <ListItemText>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              marginTop: "2%",
              marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 1 }}
            >
              SKD vs MI
              <Typography
                display="flex"
                variant="caption"
                sx={{ mt: -1, color: "#7569F1", ml: "1%" }}
              >
                8:3 &nbsp; 0pm
                <Typography
                  variant="caption"
                  sx={{ color: "black", ml: "5%", width: "60px" }}
                >
                  15 March 2023
                </Typography>
              </Typography>
            </Typography>
            <Button
              onClick={() => navigate("/usercount")}
              sx={{
                color: "#29BDEC",
                height: "0px",
                width: "160px",
                ml: 18,
                mt: 3,
                fontWeight:'bold'
              }}
            >
              {" "}
              Team Created{" "}
              <Typography sx={{ color: "red", ml: 1 }}>1</Typography>
            </Button>
            <Typography
              variant="subtitle1"
              sx={{ ml: 17, mt: 2, color: "#EC294C" }}
            >
              Lose
            </Typography>
          </Box>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              marginTop: "2%",
              marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 1 }}
            >
              CSK vs MI
              <Typography
                display="flex"
                variant="caption"
                sx={{ mt: -1, color: "#7569F1", ml: "1%" }}
              >
                8:3 &nbsp; 0pm
                <Typography
                  variant="caption"
                  sx={{ color: "black", ml: "5%", width: "60px" }}
                >
                  15 March 2023
                </Typography>
              </Typography>
            </Typography>
            <Button
              onClick={() => navigate("/usercount")}
              sx={{
                color: "#29BDEC",
                height: "0px",
                width: "160px",
                ml: 18,
                mt: 3,
                fontWeight:'bold'
              }}
            >
              {" "}
              Team Created{" "}
              <Typography sx={{ color: "red", ml: 1 }}>3</Typography>
            </Button>
            <Typography
              variant="subtitle1"
              sx={{ ml: 17, mt: 2, color: "#2EAC1A" }}
            >
              Win
            </Typography>
          </Box>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              marginTop: "2%",
              marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 1 }}
            >
              SKD vs MI
              <Typography
                display="flex"
                variant="caption"
                sx={{ mt: -1, color: "#7569F1", ml: "1%" }}
              >
                8:3 &nbsp; 0pm
                <Typography
                  variant="caption"
                  sx={{ color: "black", ml: "5%", width: "60px" }}
                >
                  15 March 2023
                </Typography>
              </Typography>
            </Typography>
            <Button
              onClick={() => navigate("/usercount")}
              sx={{
                color: "#29BDEC",
                height: "0px",
                width: "160px",
                ml: 18,
                mt: 3,
                fontWeight:'bold'
              }}
            >
              {" "}
              Team Created{" "}
              <Typography sx={{ color: "red", ml: 1 }}>1</Typography>
            </Button>
            <Typography
              variant="subtitle1"
              sx={{ ml: 17, mt: 2, color: "#EC294C" }}
            >
              Lose
            </Typography>
          </Box>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              marginTop: "2%",
              marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 1 }}
            >
              CSK vs MI
              <Typography
                display="flex"
                variant="caption"
                sx={{ mt: -1, color: "#7569F1", ml: "1%" }}
              >
                8:3 &nbsp; 0pm
                <Typography
                  variant="caption"
                  sx={{ color: "black", ml: "5%", width: "60px" }}
                >
                  15 March 2023
                </Typography>
              </Typography>
            </Typography>
            <Button
              onClick={() => navigate("/usercount")}
              sx={{
                color: "#29BDEC",
                height: "0px",
                width: "160px",
                ml: 18,
                mt: 3,
                fontWeight:'bold'
              }}
            >
              {" "}
              Team Created{" "}
              <Typography sx={{ color: "red", ml: 1 }}>1</Typography>
            </Button>
            <Typography
              variant="subtitle1"
              sx={{ ml: 17, mt: 2, color: "#2EAC1A" }}
            >
              Win
            </Typography>
          </Box>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              marginTop: "2%",
              marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 1 }}
            >
              SKD vs MI
              <Typography
                display="flex"
                variant="caption"
                sx={{ mt: -1, color: "#7569F1", ml: "1%" }}
              >
                8:3 &nbsp; 0pm
                <Typography
                  variant="caption"
                  sx={{ color: "black", ml: "5%", width: "60px" }}
                >
                  15 March 2023
                </Typography>
              </Typography>
            </Typography>
            <Button
              onClick={() => navigate("/usercount")}
              sx={{
                color: "#29BDEC",
                height: "0px",
                width: "160px",
                ml: 18,
                mt: 3,
                fontWeight:'bold'
              }}
            >
              {" "}
              Team Created{" "}
              <Typography sx={{ color: "red", ml: 1 }}>3</Typography>
            </Button>
            <Typography
              variant="subtitle1"
              sx={{ ml: 17, mt: 2, color: "#EC294C" }}
            >
              Lose
            </Typography>
          </Box>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              marginTop: "2%",
              marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 1 }}
            >
              CSK vs MI
              <Typography
                display="flex"
                variant="caption"
                sx={{ mt: -1, color: "#7569F1", ml: "1%" }}
              >
                8:3 &nbsp; 0pm
                <Typography
                  variant="caption"
                  sx={{ color: "black", ml: "5%", width: "60px" }}
                >
                  15 March 2023
                </Typography>
              </Typography>
            </Typography>
            <Button
              onClick={() => navigate("/usercount")}
              sx={{
                color: "#29BDEC",
                height: "0px",
                width: "160px",
                ml: 18,
                mt: 3,
                fontWeight:'bold'
              }}
            >
              {" "}
              Team Created{" "}
              <Typography sx={{ color: "red", ml: 1 }}>1</Typography>
            </Button>
            <Typography
              variant="subtitle1"
              sx={{ ml: 17, mt: 2, color: "#2EAC1A" }}
            >
              Win
            </Typography>
          </Box>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              marginTop: "2%",
              marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 1 }}
            >
              SKD vs MI
              <Typography
                display="flex"
                variant="caption"
                sx={{ mt: -1, color: "#7569F1", ml: "1%" }}
              >
                8:3 &nbsp; 0pm
                <Typography
                  variant="caption"
                  sx={{ color: "black", ml: "5%", width: "60px" }}
                >
                  15 March 2023
                </Typography>
              </Typography>
            </Typography>
            <Button
              onClick={() => navigate("/usercount")}
              sx={{
                color: "#29BDEC",
                height: "0px",
                width: "160px",
                ml: 18,
                mt: 3,
                fontWeight:'bold'
              }}
            >
              {" "}
              Team Created{" "}
              <Typography sx={{ color: "red", ml: 1 }}>3</Typography>
            </Button>
            <Typography
              variant="subtitle1"
              sx={{ ml: 17, mt: 2, color: "#EC294C" }}
            >
              Lose
            </Typography>
          </Box>
          <Box
            sx={{
              height: "70px",
              width: "100%",
              marginTop: "2%",
              marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", ml: 3, mt: 1 }}
            >
              CSK vs MI
              <Typography
                display="flex"
                variant="caption"
                sx={{ mt: -1, color: "#7569F1", ml: "1%" }}
              >
                8:3 &nbsp; 0pm
                <Typography
                  variant="caption"
                  sx={{ color: "black", ml: "5%", width: "60px" }}
                >
                  15 March 2023
                </Typography>
              </Typography>
            </Typography>
            <Button
              onClick={() => navigate("/usercount")}
              sx={{
                color: "#29BDEC",
                height: "0px",
                width: "160px",
                ml: 18,
                mt: 3,
                fontWeight:'bold'
              }}
            >
              {" "}
              Team Created{" "}
              <Typography sx={{ color: "red", ml: 1 }}>1</Typography>
            </Button>
            <Typography
              variant="subtitle1"
              sx={{ ml: 17, mt: 2, color: "#2EAC1A" }}
            >
              Win
            </Typography>
          </Box>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

//for static list data
function RenderCard() {
  const navigate = useNavigate();

  return (
    <ListItem component="div" disablePadding>
      <ListItemButton>
        <ListItemText>
          <Box
            sx={{
              height: "80px",
              width: "104%",
              marginTop: "2%",
              marginLeft: "-1%",
              backgroundImage: `url(${backImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //border: '1px solid red',
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "50px", width: "50px", mt: 2, ml: 2 }}
              src={avtr6}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", ml: 1, mt: 2 }}
            >
              Sana Joe
            </Typography>
            <Typography variant="caption" sx={{ mt: 4, ml: -8 }}>
              Username : sanajoenej
            </Typography>
            <Typography variant="caption" sx={{ mt: 6, ml: -16.3 }}>
              DrillCoins : 20,000
            </Typography>
            <Button
              onClick={() => navigate("/userprofile")}
              sx={{
                fontSize: "9px",
                height: "20px",
                width: "60px",
                borderRadius: "20px",
                ml: 5,
                mt: 1,
                border: "1px solid black",
                color: "black",
              }}
            >
              View
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "104%",
              marginTop: "2%",
              marginLeft: "-1%",
              backgroundImage: `url(${backImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //border: '1px solid red',
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "50px", width: "50px", mt: 2, ml: 2 }}
              src={avtr6}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", ml: 1, mt: 2 }}
            >
              Sana Joe
            </Typography>
            <Typography variant="caption" sx={{ mt: 4, ml: -8 }}>
              Username : sanajoenej
            </Typography>
            <Typography variant="caption" sx={{ mt: 6, ml: -16.3 }}>
              DrillCoins : 20,000
            </Typography>
            <Button
              onClick={() => navigate("/userprofile")}
              sx={{
                fontSize: "9px",
                height: "20px",
                width: "60px",
                borderRadius: "20px",
                ml: 5,
                mt: 1,
                border: "1px solid black",
                color: "black",
              }}
            >
              View
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "104%",
              marginTop: "2%",
              marginLeft: "-1%",
              backgroundImage: `url(${backImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //border: '1px solid red',
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "50px", width: "50px", mt: 2, ml: 2 }}
              src={avtr6}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", ml: 1, mt: 2 }}
            >
              Sana Joe
            </Typography>
            <Typography variant="caption" sx={{ mt: 4, ml: -8 }}>
              Username : sanajoenej
            </Typography>
            <Typography variant="caption" sx={{ mt: 6, ml: -16.3 }}>
              DrillCoins : 20,000
            </Typography>
            <Button
              onClick={() => navigate("/userprofile")}
              sx={{
                fontSize: "9px",
                height: "20px",
                width: "60px",
                borderRadius: "20px",
                ml: 5,
                mt: 1,
                border: "1px solid black",
                color: "black",
              }}
            >
              View
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "104%",
              marginTop: "2%",
              marginLeft: "-1%",
              backgroundImage: `url(${backImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //border: '1px solid red',
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "50px", width: "50px", mt: 2, ml: 2 }}
              src={avtr6}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", ml: 1, mt: 2 }}
            >
              Sana Joe
            </Typography>
            <Typography variant="caption" sx={{ mt: 4, ml: -8 }}>
              Username : sanajoenej
            </Typography>
            <Typography variant="caption" sx={{ mt: 6, ml: -16.3 }}>
              DrillCoins : 20,000
            </Typography>
            <Button
              onClick={() => navigate("/userprofile")}
              sx={{
                fontSize: "9px",
                height: "20px",
                width: "60px",
                borderRadius: "20px",
                ml: 5,
                mt: 1,
                border: "1px solid black",
                color: "black",
              }}
            >
              View
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "104%",
              marginTop: "2%",
              marginLeft: "-1%",
              backgroundImage: `url(${backImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //border: '1px solid red',
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "50px", width: "50px", mt: 2, ml: 2 }}
              src={avtr6}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", ml: 1, mt: 2 }}
            >
              Sana Joe
            </Typography>
            <Typography variant="caption" sx={{ mt: 4, ml: -8 }}>
              Username : sanajoenej
            </Typography>
            <Typography variant="caption" sx={{ mt: 6, ml: -16.3 }}>
              DrillCoins : 20,000
            </Typography>
            <Button
              onClick={() => navigate("/userprofile")}
              sx={{
                fontSize: "9px",
                height: "20px",
                width: "60px",
                borderRadius: "20px",
                ml: 5,
                mt: 1,
                border: "1px solid black",
                color: "black",
              }}
            >
              View
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "104%",
              marginTop: "2%",
              marginLeft: "-1%",
              backgroundImage: `url(${backImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //border: '1px solid red',
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "50px", width: "50px", mt: 2, ml: 2 }}
              src={avtr6}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", ml: 1, mt: 2 }}
            >
              Sana Joe
            </Typography>
            <Typography variant="caption" sx={{ mt: 4, ml: -8 }}>
              Username : sanajoenej
            </Typography>
            <Typography variant="caption" sx={{ mt: 6, ml: -16.3 }}>
              DrillCoins : 20,000
            </Typography>
            <Button
              onClick={() => navigate("/userprofile")}
              sx={{
                fontSize: "9px",
                height: "20px",
                width: "60px",
                borderRadius: "20px",
                ml: 5,
                mt: 1,
                border: "1px solid black",
                color: "black",
              }}
            >
              View
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "104%",
              marginTop: "2%",
              marginLeft: "-1%",
              backgroundImage: `url(${backImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //border: '1px solid red',
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "50px", width: "50px", mt: 2, ml: 2 }}
              src={avtr6}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", ml: 1, mt: 2 }}
            >
              Sana Joe
            </Typography>
            <Typography variant="caption" sx={{ mt: 4, ml: -8 }}>
              Username : sanajoenej
            </Typography>
            <Typography variant="caption" sx={{ mt: 6, ml: -16.3 }}>
              DrillCoins : 20,000
            </Typography>
            <Button
              onClick={() => navigate("/userprofile")}
              sx={{
                fontSize: "9px",
                height: "20px",
                width: "60px",
                borderRadius: "20px",
                ml: 5,
                mt: 1,
                border: "1px solid black",
                color: "black",
              }}
            >
              View
            </Button>
          </Box>
          <Box
            sx={{
              height: "80px",
              width: "104%",
              marginTop: "2%",
              marginLeft: "-1%",
              backgroundImage: `url(${backImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //border: '1px solid red',
              borderRadius: "40px",
              display: "flex",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "50px", width: "50px", mt: 2, ml: 2 }}
              src={avtr6}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", ml: 1, mt: 2 }}
            >
              Sana Joe
            </Typography>
            <Typography variant="caption" sx={{ mt: 4, ml: -8 }}>
              Username : sanajoenej
            </Typography>
            <Typography variant="caption" sx={{ mt: 6, ml: -16.3 }}>
              DrillCoins : 20,000
            </Typography>
            <Button
              onClick={() => navigate("/userprofile")}
              sx={{
                fontSize: "9px",
                height: "20px",
                width: "60px",
                borderRadius: "20px",
                ml: 5,
                mt: 1,
                border: "1px solid black",
                color: "black",
              }}
            >
              View
            </Button>
          </Box>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default function UserHistory(props) {
  //for userhistory style
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

  //for card option highlight button click
  const [activeSort, setActiveSort] = useState(false);
  const [activePoint, setActivePoint] = useState(false);
  const [activeTeam, setActiveTeam] = useState(false);
  const [activeSeason, setActiveSeason] = useState(false);

  //for admin slider
  const [theme, setTheme] = useState(0);
  const handleOpen = () => {
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
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 6 }}
      >
        <Divider />
        <Toolbar />
        <Typography
          display="flex"
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", mt: "-8%", ml: "-1%" }}
        >
          Game History
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", mt: "0%", ml: "56%" }}
          >
            Also View This
          </Typography>
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
            <Card display="flex" className={classes.card1}>
              <Box component="main" sx={{ flexGrow: 1, color: "black", p: 4 }}>
                <Button
                  onClick={handleSort}
                  sx={{
                    color: activeSort ? "#7569F1" : "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                    mt: -3,
                    ml: -1,
                  }}
                >
                  Sort by
                </Button>
                <Button
                  onClick={handlePoint}
                  sx={{
                    color: activePoint ? "#7569F1" : "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                    mt: -3,
                    ml: 2,
                  }}
                >
                  Game
                </Button>
                <Button
                  onClick={handleTeam}
                  sx={{
                    color: activeTeam ? "#7569F1" : "#7569F1",
                    fontSize: "15px",
                    fontWeight: "bold",
                    mt: -3,
                    ml: 2,
                  }}
                >
                  Season
                </Button>
                <Button
                  onClick={handleSeason}
                  sx={{
                    color: activeSeason ? "#7569F1" : "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                    mt: -3,
                    ml: 2,
                  }}
                >
                  Winnings
                </Button>
                <Button
                  onClick={handleTeam}
                  sx={{
                    color: activeTeam ? "#7569F1" : "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                    mt: -3,
                    ml: 2,
                  }}
                >
                  Losses
                </Button>
                <Button
                  onClick={handleSeason}
                  sx={{
                    color: activeSeason ? "#7569F1" : "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                    mt: -3,
                    ml: 2,
                  }}
                >
                  Time
                </Button>

                <Box>
                  <Grid container justifyContent="center">
                    <Grid item xs={6}>
                      <Button
                        sx={{
                          mt: -9,
                          ml: 50,
                          fontSize: "25px",
                          color: "#7569F1",
                        }}
                      >
                        <TuneIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Divider
                  sx={{
                    border: "1px solid black",
                    width: "110%",
                    ml: "-5%",
                    mt: -3,
                  }}
                />
                <Toolbar />
                <Box
                  sx={{
                    ml: "-4%",
                    mt: "-9%",
                    width: "49vw",
                    height: 337,
                    bgcolor: "background.paper",
                  }}
                >
                  <FixedSizeList
                    height={522}
                    width="49vw"
                    itemSize={1}
                    itemCount={1}
                    overscanCount={1}
                    borderRadius="30px !important"
                  >
                    {RenderRow}
                  </FixedSizeList>
                </Box>
              </Box>
              <Card className={classes.card2}>
                <Box
                  sx={{
                    ml: "1%",
                    mt: "2.2%",
                    width: "23vw",
                    height: 337,
                    bgcolor: "background.paper",
                  }}
                >
                  <FixedSizeList
                    height={585}
                    width="23.5vw"
                    itemSize={1}
                    itemCount={1}
                    overscanCount={1}
                    borderRadius="30px !important"
                  >
                    {RenderCard}
                  </FixedSizeList>
                </Box>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
