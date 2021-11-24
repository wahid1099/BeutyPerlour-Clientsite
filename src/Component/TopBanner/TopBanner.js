import React  from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bannerimg from '../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';
import {Button, Container, Typography} from "@mui/material";

const TopBanner = () => {
    return (
        <Container>
        <Box sx={{ flexGrow: 1 ,mt:8}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h3"style={{ color: '#141515' }}>
                            BEAUTY SALON
                        </Typography>
                        <Typography variant="h3" >
                            FOR EVERY WOMEN
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#F63E7B' }}>Get an Appointment</Button>
                    </Box>
                </Grid>



                <Grid item xs={12} md={6}>
<img src={bannerimg} style={{ width: '484px' ,}}/>


                </Grid>

            </Grid>
        </Box>
        </Container>
    );
};

export default TopBanner;