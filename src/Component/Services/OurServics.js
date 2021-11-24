import React, { useState, useEffect } from 'react';
import {Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom";
const OurServics = () => {
         const[services,setServices]=useState([]);
         useEffect(() => {
         fetch('https://warm-gorge-48984.herokuapp.com/services')
         .then(res=>res.json())
         .then(data=>{
           setServices(data)
         })


         },[])

    return (
        <>
        <Typography variant="h4"style={{ color: '#141515',marginTop: '70px'}}>
            Our Awesome Services
        </Typography>

        <Container>
        

        <Grid container spacing={3} sx={{ mb: 5 ,pt:8}}>


          {
            services.map(service=>(   <Grid item xs={12} md={4}>
                    <Link to={`/placeorder/${service._id}`} style={{ textDecoration: 'none' }}>
              <Card >
          <CardActionArea>
              <img  src={service.img} style={{width:'72px',height:'72px',marginTop:'10px'}}/>
           
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
             {service.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" style={{color: '#F63E7B'}}>
                 ${service.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                      {service.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
            </Link>
              </Grid>


            ))
          }
       




        
              
        </Grid>



        <Button variant="contained" style={{ backgroundColor: '#F63E7B',marginTop:'15px' }}>EXPLORE MORE</Button>

      </Container>
  
        </>

    );
};

export default OurServics;