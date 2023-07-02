import React from 'react';
import { makeStyles } from '@mui/styles';
import WinnerCSS from '../assets/styles/DashboardStyle/Winners.Style';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid } from '@mui/material';
import figpie from '../assets/images/DashboardImage/Figpie.png'
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Avatar from '@mui/material/Avatar';
import backImg from '../assets/images/DashboardImage/backImg.png'
import avtr6 from '../assets/images/AvtarImages/avtr6.png'
import sign from '../assets/images/DashboardImage/sign.png'
import clip from '../assets/images/DashboardImage/clip.png'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

//for winner style
const useStyles = makeStyles(WinnerCSS);


//for live matches  static functionality
function RenderRow() {

    const navigate = useNavigate();

    return (
        <ListItem component="div" disablePadding>
            <ListItemButton>
                <ListItemText>
                    <Box
                        sx={{
                            height: '95px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '20px',
                            display: 'flex'
                        }}>
                        <Typography display='flex' variant='subtitle1' sx={{ mt: 4, ml: 1, fontWeight: 'bold', height: '20px', }}>DRA &nbsp;<img width='48px' height='50px' style={{ marginTop: '-10%', }} src={sign} /></Typography>
                        <Typography variant='body2' sx={{ color: '#EC294C', ml: 4, fontWeight: 'bold', mt: 2, width: '50px', height: '20px' }}>Live</Typography>
                        <Typography sx={{ mt: 5, ml: -3, fontWeight: 'bold', fontSize: '10px', width: '550px', height: '20px' }}>5CR Prize</Typography>
                        {/* <Typography  sx={{ mt: 6, ml: -10, color: '#7569F1',fontSize:'10px' ,width:'270px'}}>2,38, people's playing</Typography> */}
                        <img width='50px' height='50px' style={{ marginLeft: '6%', marginTop: '7%', }} src={clip} />
                        <Typography variant='subtitle1' sx={{ mt: 3, ml: 0, fontWeight: 'bold', mr: 1 }}>Super Stars</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '95px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '20px',
                            display: 'flex'
                        }}>
                        <Typography display='flex' variant='subtitle1' sx={{ mt: 4, ml: 1, fontWeight: 'bold', height: '20px', }}>DRA &nbsp;<img width='48px' height='50px' style={{ marginTop: '-10%', }} src={sign} /></Typography>
                        <Typography variant='body2' sx={{ color: '#EC294C', ml: 4, fontWeight: 'bold', mt: 2, width: '50px', height: '20px' }}>Live</Typography>
                        <Typography sx={{ mt: 5, ml: -3, fontWeight: 'bold', fontSize: '10px', width: '550px', height: '20px' }}>5CR Prize</Typography>
                        {/* <Typography  sx={{ mt: 6, ml: -10, color: '#7569F1',fontSize:'10px' ,width:'270px'}}>2,38, people's playing</Typography> */}
                        <img width='50px' height='50px' style={{ marginLeft: '6%', marginTop: '7%', }} src={clip} />
                        <Typography variant='subtitle1' sx={{ mt: 3, ml: 0, fontWeight: 'bold', mr: 1 }}>Super Stars</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '95px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '20px',
                            display: 'flex'
                        }}>
                        <Typography display='flex' variant='subtitle1' sx={{ mt: 4, ml: 1, fontWeight: 'bold', height: '20px', }}>DRA &nbsp;<img width='48px' height='50px' style={{ marginTop: '-10%', }} src={sign} /></Typography>
                        <Typography variant='body2' sx={{ color: '#EC294C', ml: 4, fontWeight: 'bold', mt: 2, width: '50px', height: '20px' }}>Live</Typography>
                        <Typography sx={{ mt: 5, ml: -3, fontWeight: 'bold', fontSize: '10px', width: '550px', height: '20px' }}>5CR Prize</Typography>
                        {/* <Typography  sx={{ mt: 6, ml: -10, color: '#7569F1',fontSize:'10px' ,width:'270px'}}>2,38, people's playing</Typography> */}
                        <img width='50px' height='50px' style={{ marginLeft: '6%', marginTop: '7%', }} src={clip} />
                        <Typography variant='subtitle1' sx={{ mt: 3, ml: 0, fontWeight: 'bold', mr: 1 }}>Super Stars</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '95px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '20px',
                            display: 'flex'
                        }}>
                        <Typography display='flex' variant='subtitle1' sx={{ mt: 4, ml: 1, fontWeight: 'bold', height: '20px', }}>DRA &nbsp;<img width='48px' height='50px' style={{ marginTop: '-10%', }} src={sign} /></Typography>
                        <Typography variant='body2' sx={{ color: '#EC294C', ml: 4, fontWeight: 'bold', mt: 2, width: '50px', height: '20px' }}>Live</Typography>
                        <Typography sx={{ mt: 5, ml: -3, fontWeight: 'bold', fontSize: '10px', width: '550px', height: '20px' }}>5CR Prize</Typography>
                        {/* <Typography  sx={{ mt: 6, ml: -10, color: '#7569F1',fontSize:'10px' ,width:'270px'}}>2,38, people's playing</Typography> */}
                        <img width='50px' height='50px' style={{ marginLeft: '6%', marginTop: '7%', }} src={clip} />
                        <Typography variant='subtitle1' sx={{ mt: 3, ml: 0, fontWeight: 'bold', mr: 1 }}>Super Stars</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '95px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '20px',
                            display: 'flex'
                        }}>
                        <Typography display='flex' variant='subtitle1' sx={{ mt: 4, ml: 1, fontWeight: 'bold', height: '20px', }}>DRA &nbsp;<img width='48px' height='50px' style={{ marginTop: '-10%', }} src={sign} /></Typography>
                        <Typography variant='body2' sx={{ color: '#EC294C', ml: 4, fontWeight: 'bold', mt: 2, width: '50px', height: '20px' }}>Live</Typography>
                        <Typography sx={{ mt: 5, ml: -3, fontWeight: 'bold', fontSize: '10px', width: '550px', height: '20px' }}>5CR Prize</Typography>
                        {/* <Typography  sx={{ mt: 6, ml: -10, color: '#7569F1',fontSize:'10px' ,width:'270px'}}>2,38, people's playing</Typography> */}
                        <img width='50px' height='50px' style={{ marginLeft: '6%', marginTop: '7%', }} src={clip} />
                        <Typography variant='subtitle1' sx={{ mt: 3, ml: 0, fontWeight: 'bold', mr: 1 }}>Super Stars</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '95px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '20px',
                            display: 'flex'
                        }}>
                        <Typography display='flex' variant='subtitle1' sx={{ mt: 4, ml: 1, fontWeight: 'bold', height: '20px', }}>DRA &nbsp;<img width='48px' height='50px' style={{ marginTop: '-10%', }} src={sign} /></Typography>
                        <Typography variant='body2' sx={{ color: '#EC294C', ml: 4, fontWeight: 'bold', mt: 2, width: '50px', height: '20px' }}>Live</Typography>
                        <Typography sx={{ mt: 5, ml: -3, fontWeight: 'bold', fontSize: '10px', width: '550px', height: '20px' }}>5CR Prize</Typography>
                        {/* <Typography  sx={{ mt: 6, ml: -10, color: '#7569F1',fontSize:'10px' ,width:'270px'}}>2,38, people's playing</Typography> */}
                        <img width='50px' height='50px' style={{ marginLeft: '6%', marginTop: '7%', }} src={clip} />
                        <Typography variant='subtitle1' sx={{ mt: 3, ml: 0, fontWeight: 'bold', mr: 1 }}>Super Stars</Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '95px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            border: '1px solid gray',
                            borderRadius: '20px',
                            display: 'flex'
                        }}>
                        <Typography display='flex' variant='subtitle1' sx={{ mt: 4, ml: 1, fontWeight: 'bold', height: '20px', }}>DRA &nbsp;<img width='48px' height='50px' style={{ marginTop: '-10%', }} src={sign} /></Typography>
                        <Typography variant='body2' sx={{ color: '#EC294C', ml: 4, fontWeight: 'bold', mt: 2, width: '50px', height: '20px' }}>Live</Typography>
                        <Typography sx={{ mt: 5, ml: -3, fontWeight: 'bold', fontSize: '10px', width: '550px', height: '20px' }}>5CR Prize</Typography>
                        {/* <Typography  sx={{ mt: 6, ml: -10, color: '#7569F1',fontSize:'10px' ,width:'270px'}}>2,38, people's playing</Typography> */}
                        <img width='50px' height='50px' style={{ marginLeft: '6%', marginTop: '7%', }} src={clip} />
                        <Typography variant='subtitle1' sx={{ mt: 3, ml: 0, fontWeight: 'bold', mr: 1 }}>Super Stars</Typography>
                    </Box>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

//for  latest winner static functionality
function RenderCard() {

    const navigate = useNavigate();

    return (
        <ListItem component="div" disablePadding>
            <ListItemButton>
                <ListItemText>
                    <Box
                        sx={{
                            height: '80px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            backgroundImage: `url(${backImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            //border: '1px solid red',
                            borderRadius: '40px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '40px', width: '40px', mt: 2, ml: 1 }} src={avtr6} />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', ml: 1, mt: 2 }}>Sana Joe</Typography>
                        <Typography variant='caption' sx={{ mt: 4, ml: -8 }}>Username : sanajoenej</Typography>
                        <Typography variant='caption' sx={{ mt: 6, ml: -16.3 }}>DrillCoins : 20,000</Typography>
                        <Button onClick={() => navigate('/userprofile')} sx={{ fontSize: '8px', height: '20px', width: '65px', borderRadius: '20px', ml: 5, mt: 1, border: '1px solid black', color: 'black' }}>View</Button>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            backgroundImage: `url(${backImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            //border: '1px solid red',
                            borderRadius: '40px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '40px', width: '40px', mt: 2, ml: 1 }} src={avtr6} />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', ml: 1, mt: 2 }}>Sana Joe</Typography>
                        <Typography variant='caption' sx={{ mt: 4, ml: -8 }}>Username : sanajoenej</Typography>
                        <Typography variant='caption' sx={{ mt: 6, ml: -16.3 }}>DrillCoins : 20,000</Typography>
                        <Button onClick={() => navigate('/userprofile')} sx={{ fontSize: '8px', height: '20px', width: '65px', borderRadius: '20px', ml: 5, mt: 1, border: '1px solid black', color: 'black' }}>View</Button>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            backgroundImage: `url(${backImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            //border: '1px solid red',
                            borderRadius: '40px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '40px', width: '40px', mt: 2, ml: 1 }} src={avtr6} />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', ml: 1, mt: 2 }}>Sana Joe</Typography>
                        <Typography variant='caption' sx={{ mt: 4, ml: -8 }}>Username : sanajoenej</Typography>
                        <Typography variant='caption' sx={{ mt: 6, ml: -16.3 }}>DrillCoins : 20,000</Typography>
                        <Button onClick={() => navigate('/userprofile')} sx={{ fontSize: '8px', height: '20px', width: '65px', borderRadius: '20px', ml: 5, mt: 1, border: '1px solid black', color: 'black' }}>View</Button>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            backgroundImage: `url(${backImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            //border: '1px solid red',
                            borderRadius: '40px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '40px', width: '40px', mt: 2, ml: 1 }} src={avtr6} />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', ml: 1, mt: 2 }}>Sana Joe</Typography>
                        <Typography variant='caption' sx={{ mt: 4, ml: -8 }}>Username : sanajoenej</Typography>
                        <Typography variant='caption' sx={{ mt: 6, ml: -16.3 }}>DrillCoins : 20,000</Typography>
                        <Button onClick={() => navigate('/userprofile')} sx={{ fontSize: '8px', height: '20px', width: '65px', borderRadius: '20px', ml: 5, mt: 1, border: '1px solid black', color: 'black' }}>View</Button>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            backgroundImage: `url(${backImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            //border: '1px solid red',
                            borderRadius: '40px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '40px', width: '40px', mt: 2, ml: 1 }} src={avtr6} />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', ml: 1, mt: 2 }}>Sana Joe</Typography>
                        <Typography variant='caption' sx={{ mt: 4, ml: -8 }}>Username : sanajoenej</Typography>
                        <Typography variant='caption' sx={{ mt: 6, ml: -16.3 }}>DrillCoins : 20,000</Typography>
                        <Button onClick={() => navigate('/userprofile')} sx={{ fontSize: '8px', height: '20px', width: '65px', borderRadius: '20px', ml: 5, mt: 1, border: '1px solid black', color: 'black' }}>View</Button>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            backgroundImage: `url(${backImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            //border: '1px solid red',
                            borderRadius: '40px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '40px', width: '40px', mt: 2, ml: 1 }} src={avtr6} />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', ml: 1, mt: 2 }}>Sana Joe</Typography>
                        <Typography variant='caption' sx={{ mt: 4, ml: -8 }}>Username : sanajoenej</Typography>
                        <Typography variant='caption' sx={{ mt: 6, ml: -16.3 }}>DrillCoins : 20,000</Typography>
                        <Button onClick={() => navigate('/userprofile')} sx={{ fontSize: '8px', height: '20px', width: '65px', borderRadius: '20px', ml: 5, mt: 1, border: '1px solid black', color: 'black' }}>View</Button>
                    </Box>
                    <Box
                        sx={{
                            height: '80px',
                            width: '105%',
                            marginTop: '2%',
                            marginLeft: '-1%',
                            backgroundImage: `url(${backImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            //border: '1px solid red',
                            borderRadius: '40px',
                            display: 'flex'
                        }}>
                        <Avatar alt="Remy Sharp" sx={{ height: '40px', width: '40px', mt: 2, ml: 1 }} src={avtr6} />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', ml: 1, mt: 2 }}>Sana Joe</Typography>
                        <Typography variant='caption' sx={{ mt: 4, ml: -8 }}>Username : sanajoenej</Typography>
                        <Typography variant='caption' sx={{ mt: 6, ml: -16.3 }}>DrillCoins : 20,000</Typography>
                        <Button onClick={() => navigate('/userprofile')} sx={{ fontSize: '8px', height: '20px', width: '65px', borderRadius: '20px', ml: 5, mt: 1, border: '1px solid black', color: 'black' }}>View</Button>
                    </Box>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

const Winners = () => {

    //for Navigate page
    const navigate = useNavigate();

    //for winner style
    const classes = useStyles();

    return (
        <div>
            <Box component="section" className={classes.box1} >
                <Container>
                    <Grid container spacing={5} alignItems='center' >
                        <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: -4, lg: 0 } }}>
                            <Typography variant="h6" gutterBottom className={classes.type}>
                                Latest Winners
                                <Button onClick={() => navigate('/users')} variant="text" className={classes.view1}>View All</Button>
                            </Typography>
                            <Card className={classes.card1}>
                                <Box
                                    className={classes.box2}
                                >
                                    <FixedSizeList
                                        height={540}
                                        width='22vw'
                                        itemSize={1}
                                        itemCount={1}
                                        overscanCount={1}
                                        borderRadius='30px !important'
                                    >
                                        {RenderCard}
                                    </FixedSizeList>
                                </Box>

                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: 4, lg: 0 } }}>
                            <Typography variant="h6" className={classes.user} gutterBottom>
                                User Activity
                            </Typography>
                            <Button onClick={() => navigate('/team')} className={classes.playerbtn}><SportsHandballIcon className={classes.playerIcon} />Add New Team</Button>

                            <Card className={classes.card2}>
                                <ExpandMoreIcon className={classes.expendIcon} />
                                <img src={figpie} style={{ width: '60%', height: '180px', margin: '20%', marginTop: '1%' }} />

                                <Box className={classes.box3} >
                                    <Typography color="white" variant="h4" className={classes.type6} >
                                        50,000
                                        <Typography variant="body1" color="white">
                                            Active Users
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Typography variant="body1" color="white" className={classes.type7} >
                                    Mostly
                                    {/* <Box disabled
                                        className={classes.box4}
                                    /> */}
                                    <Typography variant="body1" color="white" className={classes.type8} >
                                        IPL Active 
                                        {/* <Box disabled
                                            className={classes.box5}
                                        /> */}
                                    </Typography>
                                    <Typography variant="body1" color="white" className={classes.type9} >
                                        Inactive 
                                        {/* <Box
                                            className={classes.box6}
                                            disabled sx={{
                                            }} /> */}
                                    </Typography>
                                </Typography>
                            </Card>

                            <Button onClick={() => navigate('/game')} className={classes.gameBtn} variant="contained"><SportsEsportsIcon className={classes.gameIcon} />Add New Contest</Button>

                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: '4%', mt: { xs: 4, lg: 0 } }}>
                            <Typography variant="h6" gutterBottom className={classes.type10}  >
                                Live Matches
                                <Button onClick={() => navigate('/game')} className={classes.view2} variant="text" >View All</Button>
                            </Typography>
                            <Card className={classes.card3}>

                                <Box
                                    className={classes.box7}
                                    sx={{}}
                                >
                                    <FixedSizeList
                                        height={539}
                                        width='322px'
                                        itemSize={1}
                                        itemCount={1}
                                        overscanCount={1}
                                        borderRadius='30px !important'

                                    >
                                        {RenderRow}
                                    </FixedSizeList>
                                </Box>

                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default Winners;
