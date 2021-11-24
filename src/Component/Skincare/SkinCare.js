import React from 'react';
import {Button, Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from '../../Image_Icon/Image/engin1.png';
import Zoom from 'react-reveal/Zoom';

const SkinCare = () => {
    return (
        <div>
            <Zoom>
        <Container>
            <Box sx={{ flexGrow: 1 ,mt:20}} >
                <Grid container spacing={2}>


                    <Grid item xs={12} md={6}>
                        <img src={bg} style={{ width: '484px' }}/>


                    </Grid>

                    {/*------------------------------------*/}




                    <Grid item xs={12} md={6}sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h3"style={{ color: '#141515' }}>
                                Let us handle your
                            </Typography>
                            <Typography variant="h3" >
                                screen <span style={{color:'#F63E7B'}}>Professionally</span> .
                            </Typography>
                            <Typography variant="h6" sx={{ my: 5 }} style={{fontSize: 14, fontWeight: 300 }}>
                                With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.                            </Typography>


                          <Grid container spacing={2}>
                              <Grid xs={12} md={6}>
                                  <Typography variant="h3"style={{ color: '#F63E7B' }}>
                                     500+
                                  </Typography>
                                  <Typography variant="h6"style={{ color: '#141515' }}>
                                      Customers
                                  </Typography>
                              </Grid>

                              <Grid xs={12} md={6}>
                                  <Typography variant="h3"style={{ color: '#F63E7B' }}>
                                      16+
                                  </Typography>
                                  <Typography variant="h6"style={{ color: '#141515' }}>
                                      Total Services
                                  </Typography>
                              </Grid>

                          </Grid>
                        </Box>


                    </Grid>





                </Grid>
            </Box>
        </Container>
        </Zoom>
        </div>
    );
};

export default SkinCare;