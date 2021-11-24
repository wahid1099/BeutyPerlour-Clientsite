import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { FaMapMarkerAlt ,FaFacebookSquare,FaTwitter,FaInstagram,FaLinkedin,FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <div style={{backgroundColor: '#F63E7B',color: '#FFFFFF'}}>
            <Container>
                <Box sx={{ flexGrow: 1 ,mt:20}} >
                    <Grid container spacing={2}>


                        <Grid item xs={12} md={4} >
                           
                       
        <Typography variant="h6"  style={{ textAlign: 'start',paddingTop: '50px' }}>
       <FaMapMarkerAlt/>  H#000 (0th Floor), Road #00,
                   New DOHS, Mohakhali, Dhaka, Bangladesh
                                </Typography>

                        </Grid>
                        <Grid item xs={12} md={2} style={{ textAlign: 'start',paddingTop: '40px' }}>
                        <Typography variant="h5"style={{ textAlign: 'start' }}>
                                  COMPANY
                                </Typography>
                           
                               


      <MenuList>
        <MenuItem>
          <ListItemText> About</ListItemText>
        </MenuItem>
        <MenuItem>
        
          <ListItemText>Project</ListItemText>
         
        </MenuItem>
        <MenuItem>
    
          <ListItemText>Our Team</ListItemText>
         
        </MenuItem>
        <MenuItem>
    
    <ListItemText>Terms Conditions</ListItemText>
   
  </MenuItem>
  <MenuItem>
    
    <ListItemText>Submit Listing</ListItemText>
   
  </MenuItem>
        

      </MenuList>
   

                           </Grid>
                           <Grid item xs={12} md={2} style={{ textAlign: 'start',paddingTop: '40px' }}>
                           
                           <Typography variant="h5"style={{ textAlign: 'start' }}>
                           Quick Links
                                </Typography>
                           
                               

                              



      <MenuList >
        <MenuItem>
          <ListItemText>   Quick Links</ListItemText>
        </MenuItem>
        <MenuItem>
        
          <ListItemText>Rentals</ListItemText>
         
        </MenuItem>
        <MenuItem>
    
          <ListItemText>Sales</ListItemText>
         
        </MenuItem>
        <MenuItem>
    
    <ListItemText>Contact</ListItemText>
   
  </MenuItem>
  <MenuItem>
    
    <ListItemText>Our blog</ListItemText>
   
            </MenuItem>
          </MenuList>

                           </Grid>

                        {/*------------------------------------*/}




                        <Grid item xs={12} md={4}sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            textAlign: 'left'
                        }}>
                            <Box>
                                <Typography variant="h5" sx={{mb:1,pt:3}}>
                                About us
                                </Typography>
                               
                                <Typography variant="h6" style={{fontSize: 14, fontWeight: 300 }} sx={{mb:7}}>
                                    With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.                            
                                    <br/>
                                    <br/>
                                    
                                  
                                    <div >
                                        <FaFacebookSquare style={{width: '30px', height: '40px',paddingRight: '10px'}}/>
                                        <FaTwitter style={{width: '30px', height: '40px',paddingRight: '10px'}}/>
                                        <FaInstagram style={{width: '30px', height: '40px',paddingRight: '10px'}}/>
                                        <FaLinkedin style={{width: '30px', height: '40px',paddingRight: '10px'}}/>
                                        <FaYoutube style={{width: '30px', height: '40px',paddingRight: '10px'}}/>
                                      
                                      
                                    </div>
                                    </Typography>



                               
                            </Box>


                        </Grid>





                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;