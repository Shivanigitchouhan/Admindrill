import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
//import { List, ListItem } from "react-scrollable-accordion";
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
import sign from "../../assets/images/DashboardImage/sign.png";
import Cards from "../../DashboardComponents/Cards";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { TextField } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GameCSS from "../../assets/styles/GameStyle/Game.Style";
import img from "../../assets/images/DashboardImage/Rectangle.png";
import TuneIcon from "@mui/icons-material/Tune";
import axios from "axios";
import ball from "../../assets/images/DashboardImage/ball.webp";
import clip from "../../assets/images/DashboardImage/clip.png";
import SearchIcon from "@mui/icons-material/Search";
import "../../index.css";
import { getGames } from "../../Service/GameApi";
import { List } from "@mui/material";
import { ListItem } from "react-scrollable-accordion";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import { FixedSizeList } from "react-window";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

//for drawer line
const drawerWidth = 240;

//for onlygame style
const useStyles = makeStyles(GameCSS);

//for static list data
function RenderRow() {
  const navigate = useNavigate();

  return (
    <ListItem component="div" disablePadding>
      <ListItemButton>
        <ListItemText>
        <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "95px",
              width: "99.5%",
              marginTop: "1%",
              //marginLeft: "-1%",
              border: "1px solid gray",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mt: 3, ml: 7 }}>
                Dragon War
              </Typography>
              <Box sx={{ ml: 27, mt: -5 }}>
                <img width="80px" height="70px" src={sign} />
              </Box>
            </Box>
            <Box sx={{ ml: 20,mt:1 }}>
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
                <Typography variant="h6" sx={{ ml: 18, mt: -9 }}>
                  Super Stars
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 0, ml: 10 }}>
              <Button
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
                Edit
              </Button>
            </Box>
          </Box>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default function Game(props) {
  //for onlygame style
  const classes = useStyles();

  //for Navigate page
  const navigate = useNavigate();

  //for getAllGames Api functionality
  const [game, setGame] = useState([]);

  //for getallgame api
  useEffect(() => {
    getGameDetails();
  }, []);

  const getGameDetails = async () => {
    let response = await getGames();
    setGame(response.data.res);
  };

  //for edit button functionality
  const [dataOne, setDataOne] = useState([]);
  const handleEditOpen = (id) => {
    console.log(144, id);
    setDataOne(game.filter((i) => i.id === id.id));
    console.log(138, id);
    setEditOpen(true);
  };

  //For UpdateGame Api Functionality
  const [updateValue, setUpdateValue] = useState();
  const [updateValueTwo, setUpdateValueTwo] = useState();
  const values = {
    name: updateValueTwo,
    total_players: parseInt(updateValue),
  };
  const handleEditClose = async () => {
    const val = axios
      .put(
        `http://192.168.1.60:4000/gameType/updateGameType/${dataOne[0].id}`,
        values
      )
      .then((res) => {
        console.log(140, res);
      });
    window.location.reload(false);
    setEditOpen(false);
    navigate("/game");
  };
  useEffect(() => {
    handleEditClose();
  }, []);

  //For DeleteGame Api Functionality
  const handleDelete = async () => {
    const del = axios
      .delete(
        `http://192.168.1.60:4000/gameType/deleteGameType/${dataOne[0].id}`,
        values
      )
      .then((res) => {});
    window.location.reload(false);
    setEditOpen(false);
    navigate("/game");
  };
  useEffect(() => {
    handleDelete();
  }, []);

  //for getOneGamebyId functionality
  const [newId, setNewId] = useState("");
  const [dataById, setDatabyid] = useState("");

  const handleGetiD = async (id) => {
    console.log(111, id);
    axios
      .get(
        `http://192.168.1.60:4000/gameType/getOneGameType/${parseInt(id)}`,
        values
      )
      .then((res) => {
        setDatabyid(res.data.res);
        console.log(117, res);
      });
  };
  console.log(333, dataById);
  useEffect(() => {
    handleGetiD();
  }, []);

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
  const [activeTime, setActiveTime] = useState(false);
  const [activeTeamOne, setActiveTeamOne] = useState(false);
  const [activeTeamTwo, setActiveTeamTwo] = useState(false);

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

  //FOR Edit button BACKDROP
  const [editOpen, setEditOpen] = useState(false);

  //for card option button click highlight functionality and navigating other page
  const handleSort = () => {
    setActiveSort(!activeSort);
  };

  const handlePoint = () => {
    setActivePoint(!activePoint);
    navigate("/game");
  };

  const handleTeam = () => {
    setActiveTeam(!activeTeam);
    navigate("/team");
  };

  const handleTime = () => {
    setActiveTime(!activeTime);
  };

  const handleTeamOne = () => {
    setActiveTeamOne(!activeTeamOne);
  };

  const handleTeamTwo = () => {
    setActiveTeamTwo(!activeTeamTwo);
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

        <Typography
          variant="h6"
          sx={{ mt: -4, ml: 7, fontWeight: "bold" }}
          gutterBottom
        >
          All Games
        </Typography>

        <Box
          className={classes.box4}
          onClick={() => navigate("/newgame")}
          sx={{
            mt: 4,
            backgroundImage: `url(${img})`,
          }}
        >
          <Button
            onClick={() => navigate("/newgame")}
            className={classes.addBtn}
          >
            <SportsEsportsIcon className={classes.sportIcon} />
            Add New Game
          </Button>
        </Box>

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
              <Box component="main" className={classes.box5}>
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
                  {" "}
                  Contest
                </Button>
                <Button
                  onClick={handleTeam}
                  className={classes.teamBtn}
                  sx={{ color: activeTeam ? "#7569F1" : "black" }}
                >
                  Team
                </Button>
                <Button
                  onClick={handleTeamOne}
                  className={classes.teamBoth}
                  sx={{ color: activeTeamOne ? "#7569F1" : "#7569F1" }}
                >
                  Games
                </Button>
                <Button
                  onClick={handleTime}
                  className={classes.teamBoth}
                  sx={{ color: activeTime ? "#7569F1" : "black" }}
                >
                  Time
                </Button>
                <Box>
                  <Grid container justifyContent="center">
                    <Grid display="flex" item xs={6}>
                      <Box className={classes.box6}>
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
                      <Button className={classes.tuneIcon}>
                        <TuneIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Divider className={classes.divider} />
                <Toolbar />

                <Box
                  sx={{
                    ml: "-3.5%",
                    mt: "-5.5%",
                    width: "73vw",
                    height: 330,
                    bgcolor: "background.paper",
                    //border:'1px solid green'
                  }}
                >
                  <FixedSizeList
                    height={500}
                    width="75vw"
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
                                                <Box
                                                    className={classes.box8}
                                                >
                                                    <Box className={classes.text1}>
                                                        <Box sx={{ ml: 0, mt: 0 }}><img width='40px' height='40px' src={ball} /></Box>
                                                        
                                                        <Typography sx={{ ml: 40, mt: -6, fontWeight: 'bold' }}> Game Name :- &nbsp; &nbsp;{dataById.name}</Typography>
                                                        <Typography display='flex' sx={{ ml: 40 }}> Total_players :- <Typography sx={{ ml: 2, color: '#7569F1 !important' }}>{dataById.total_players} people are playing</Typography></Typography>
                                                        <Box sx={{ ml: 98.8, mt: -8.5 }}>
                                                            <Button variant="contained"
                                                                onClick={() => handleEditOpen(dataById)} className={classes.editBtn} >Edit
                                                            </Button>
                                                        </Box>
                                                    </Box>

                                                    <Backdrop
                                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                                        open={editOpen}
                                                    >
                                                        <Card
                                                            className={classes.card1}
                                                        >
                                                            <Typography className={classes.type1} gutterBottom>
                                                                Update <Typography className={classes.type2} >Game</Typography>
                                                            </Typography>

                                                            <Typography className={classes.type3} sx={{}}>Game Name</Typography>
                                                            <TextField
                                                                className={classes.text5}
                                                                id="outlined-required"
                                                                size='small'
                                                                type='text'
                                                                required
                                                                placeholder={dataOne[0]?.name}
                                                                value={updateValueTwo}
                                                                onChange={(e) => setUpdateValueTwo(e.target.value)}

                                                            /><br />
                                                            <Typography className={classes.type4}>total_players</Typography>
                                                            <TextField
                                                                className={classes.text6}
                                                                size='small'
                                                                type='number'
                                                                required
                                                                id="outlined-number"
                                                                placeholder={dataOne[0]?.total_players}
                                                                value={updateValue}
                                                                onChange={(e) => setUpdateValue(e.target.value)}
                                                            />
                                                            <CardActions>
                                                                <Button onClick={() => handleEditClose()} className={classes.updateBtn} variant="contained" >Update</Button><br />
                                                                <Button onClick={() => handleDelete()} className={classes.deleteBtn} variant="contained" >Delete</Button>
                                                            </CardActions>
                                                        </Card>
                                                    </Backdrop>
                                                </Box>
                                                
                                            </div>
                                            :

                                            <List
                                                scrollBehavior="smooth"
                                            >
                                                <ListItem component="div" disablePadding  >

                                                    {
                                                        game &&
                                                        game.map((res) => {
                                                            return (
                                                                <>
                                                                    <Box
                                                                        className={classes.box8}
                                                                    >
                                                                        <Box className={classes.text1}>
                                                                            <Box sx={{ ml: 0, mt: 0 }}><img width='40px' height='40px' src={ball} /></Box>
                                                                            
                                                                            <Typography sx={{ ml: 39, mt: -6, fontWeight: 'bold' }}> Game Name :- &nbsp; &nbsp;{res.name}</Typography>
                                                                            <Typography display='flex' sx={{ ml: 39 }}> Total_players :- <Typography sx={{ ml: 2, color: '#7569F1 !important' }}>{res.total_players} people are playing</Typography></Typography>
                                                                            <Box sx={{ ml: 97, mt: -8.5 }}>
                                                                                <Button variant="contained"
                                                                                    onClick={() => handleEditOpen(res)} className={classes.editBtn} >Edit
                                                                                </Button>
                                                                            </Box>
                                                                        </Box>

                                                                        <Backdrop
                                                                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                                                            open={editOpen}
                                                                        >
                                                                            <Card
                                                                                className={classes.card1}
                                                                            >
                                                                                <Typography className={classes.type1} gutterBottom>
                                                                                    Update <Typography className={classes.type2} >Game</Typography>
                                                                                </Typography>

                                                                                <Typography className={classes.type3} sx={{}}>Game Name</Typography>
                                                                                <TextField
                                                                                    className={classes.text5}
                                                                                    id="outlined-required"
                                                                                    size='small'
                                                                                    type='text'
                                                                                    required
                                                                                    placeholder={dataOne[0]?.name}
                                                                                    value={updateValueTwo}
                                                                                    onChange={(e) => setUpdateValueTwo(e.target.value)}

                                                                                /><br />
                                                                                <Typography className={classes.type4}>total_players</Typography>
                                                                                <TextField
                                                                                    className={classes.text6}
                                                                                    size='small'
                                                                                    type='number'
                                                                                    required
                                                                                    id="outlined-number"
                                                                                    placeholder={dataOne[0]?.total_players}
                                                                                    value={updateValue}
                                                                                    onChange={(e) => setUpdateValue(e.target.value)}
                                                                                />
                                                                                <CardActions>
                                                                                    <Button onClick={() => handleEditClose()} className={classes.updateBtn} variant="contained" >Update</Button><br />
                                                                                    <Button onClick={() => handleDelete()} className={classes.deleteBtn} variant="contained" >Delete</Button>
                                                                                </CardActions>
                                                                            </Card>
                                                                        </Backdrop>
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
