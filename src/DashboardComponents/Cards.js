import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import CardsCSS from '../assets/styles/DashboardStyle/Cards.Style';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { Container, Grid } from '@mui/material';
import img from '../assets/images/DashboardImage/player.png'
import game from '../assets/images/DashboardImage/game.png'
import trofy from '../assets/images/DashboardImage/trofy.png'

//for card style
const useStyles = makeStyles(CardsCSS);


const Cards = () => {

    //for card style
    const classes = useStyles();

    //for Api states 
    const [data, setData] = useState()
    const [card, setCard] = useState()
    const [player, setPlayer] = useState()

    //for Navigate page
    const navigate = useNavigate();


    //for  getAllusers count api
    useEffect(() => {
        axios.get('http://192.168.1.60:4000/admin/getAllUsers').then((res) => {
            setData(res.data.Result.length)
        }).then((resp) => {
        })
    }, [])


    //for  getAllGames count api
    useEffect(() => {
        axios.get('http://192.168.1.60:4000/gameType/getAllGameType').then((res) => {
            setCard(res.data.res.length)
        }).then((resp) => {

        })
    }, [])

    //for  getAllplayer count api
    useEffect(() => {
        axios.get('http://192.168.1.60:4000/player/getPlayers').then((res) => {
            setPlayer(res.data.Data.length)
        }).then((resp) => {
        })
    }, [])


    return (
        <div>
            <Box component="section" className={classes.box1} >
                <Container>
                    <Typography variant="h6" gutterBottom className={classes.winnerType}>
                        Welcome Admin
                    </Typography>
                    <Grid container spacing={5} alignItems='center' sx={{ mt: 4, mb: '-13%' }} >
                        <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: -4, lg: 0 } }}>
                            <Card onClick={() => navigate("/users")} className={classes.card1}>
                                <Box className={classes.text}>
                                    <Button onClick={() => navigate("/users")} variant="contained" className={classes.type1}>View</Button>
                                    <Avatar className={classes.avtr1} >
                                        <img src={img} alt="" width='40px' height='40px' style={{ margin: '5px' }} />
                                    </Avatar>
                                    <Typography color="text.secondary" className={classes.type2}>
                                        Totel Users
                                    </Typography>
                                    <Typography color="black" variant="h4" className={classes.count1}>
                                        12{data}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" className={classes.type3}>
                                        User Count
                                    </Typography>
                                </Box>

                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: 4, lg: 0 } }}>
                            <Card onClick={() => navigate("/onlygame")} className={classes.card2}>

                                <Box className={classes.text}>
                                    <Button onClick={() => navigate("/onlygame")} variant="contained" className={classes.type1}>View</Button>
                                    <Avatar className={classes.avtr2} >
                                        <img src={game} alt="" width='40px' height='40px' style={{ margin: '5px' }} />
                                    </Avatar>
                                    <Typography color="text.secondary" className={classes.type2}>
                                        Game Info
                                    </Typography>
                                    <Typography color="black" variant="h4" className={classes.count2} >
                                       15 {card}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" className={classes.type3}>
                                        Games Available
                                    </Typography>
                                </Box>

                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: 4, lg: 0 } }}>
                            <Card onClick={() => navigate("/players")} className={classes.card3}>

                                <Box className={classes.text}>
                                    <Button onClick={() => navigate("/players")} variant="contained" className={classes.type1}>View</Button>
                                    <Avatar className={classes.avtr3}>
                                        <img src={trofy} alt="" width='40px' height='40px' style={{ margin: '5px' }} />
                                    </Avatar>
                                    <Typography color="text.secondary" className={classes.type2}>
                                        Totel Players
                                    </Typography>
                                    <Typography color="black" variant="h4" className={classes.count3}>
                                        20{player}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" className={classes.type3}>
                                        All Time
                                    </Typography>
                                </Box>

                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default Cards;
