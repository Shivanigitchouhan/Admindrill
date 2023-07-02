import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import winFour from '../assets/images/AvtarImages/winFour.avif'
import winFive from '../assets/images/AvtarImages/winFive.avif'
import winTwo from '../assets/images/AvtarImages/WinTwo.avif'
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';

export default function Carousel(e) {

    //for Navigate page
    const navigate = useNavigate();

    return (
        <>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item">

                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                        <div class="carousel-caption d-none d-md-block">
                            <img src={winTwo} alt='' width="827" height="400" style={{ marginLeft: '-21.2%', marginTop: '-62%' }} />
                            <Box>
                                <Button onClick={() => navigate('/userprofile')} variant="contained" sx={{ ml: -83, mt: '-135%', width: '130px', height: '30px', fontSize: '12px', backgroundColor: '#7569F1', color: 'white' }}>view profile
                                </Button>
                                <Typography sx={{ color: 'black', mt: '-66%', width: '130px', ml: -16, fontSize: '15px' }}>Drill Coins:<Typography sx={{ color: 'white', fontSize: '13px', }}>RS 2,22,000</Typography></Typography>
                            </Box>
                            <Typography sx={{ ml: 67, mt: '-69%', fontSize: '20px', color: 'black', width: '130px', }} >
                                Steve Jon
                                <Typography display='flex' sx={{ fontWeight: 'bold', ml: 3, fontSize: '20px' }} >Win:<Typography sx={{ color: 'red', fontSize: '20px' }}>2Cr</Typography>
                                    <Typography sx={{ fontSize: '14px', ml: -9, mt: 4 }}>In IPL 2022</Typography></Typography>
                            </Typography>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#666"></rect></svg>

                        <div class="carousel-caption d-none d-md-block">
                            <img src={winFive} alt='' width="827" height="400" style={{ marginLeft: '-21.2%', marginTop: '-62%' }} />
                            <Box>
                                <Button onClick={() => navigate('/userprofile')} variant="contained" sx={{ ml: -83, mt: '-135%', width: '130px', height: '30px', fontSize: '12px', backgroundColor: '#7569F1', color: 'white' }}>view profile
                                </Button>
                                <Typography sx={{ color: 'black', mt: '-66%', width: '130px', ml: -16, fontSize: '15px' }}>Drill Coins:<Typography sx={{ color: 'white', fontSize: '13px', }}>RS 1,25,000</Typography></Typography>
                            </Box>
                            <Typography sx={{ ml: 67, mt: '-69%', fontSize: '20px', color: 'black', width: '130px', }} >
                                Clair Parker
                                <Typography display='flex' sx={{ fontWeight: 'bold', ml: 3, fontSize: '20px' }} >Win:<Typography sx={{ color: 'white', fontSize: '20px' }}>2Cr</Typography>
                                    <Typography sx={{ fontSize: '14px', ml: -9, mt: 4 }}>In IPL 2022</Typography></Typography>
                            </Typography>
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#555"></rect></svg>

                        <div class="carousel-caption d-none d-md-block">
                            <img src={winFour} alt='' width="827" height="400" style={{ marginLeft: '-21.2%', marginTop: '-62%' }} />
                            <Box>
                                <Button onClick={() => navigate('/userprofile')} variant="contained" sx={{ ml: -83, mt: '-135%', width: '130px', height: '30px', fontSize: '12px', backgroundColor: '#7569F1', color: 'white' }}>view profile
                                </Button>
                                <Typography sx={{ color: 'black', mt: '-65%', width: '130px', ml: -16, fontSize: '15px' }}>Drill Coins:<Typography sx={{ color: '#7569F1', fontSize: '13px', }}>RS 1,25,000</Typography></Typography>
                            </Box>
                            <Typography sx={{ ml: 67, mt: '-69%', fontSize: '20px', color: 'black', width: '130px', }} >
                                PratikThakur
                                <Typography display='flex' sx={{ fontWeight: 'bold', ml: 3, fontSize: '20px' }} >Win:<Typography sx={{ color: 'red', fontSize: '20px' }}>2Cr</Typography>
                                    <Typography sx={{ fontSize: '14px', ml: -9, mt: 4 }}>In IPL 2022</Typography></Typography>
                            </Typography>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );
}
