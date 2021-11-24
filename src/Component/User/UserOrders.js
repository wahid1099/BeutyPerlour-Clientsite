import React,{useEffect, useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {Container, Typography,Box,Button} from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom";
const UserOrders = () => {
   

    const{user}=UseAuth(); 

    const [usrorder,setUserOrder]=useState([]);

    useEffect(() => {

     fetch(`https://warm-gorge-48984.herokuapp.com/userAppoinment?email=${user.email}`)
     .then(res=>res.json())
     .then(data=>
           setUserOrder(data)
        
        )

    },[]);
    console.log(usrorder);
    return (
        <div >
                  <Typography variant="h5" >
                                My Orders
                                </Typography>



                                <Container>

                                <Grid container spacing={3} sx={{ mb: 5 ,pt:8}}>


{
  usrorder.map(myorders=>(   <Grid item xs={12} md={4}>
          
    <Card >
<CardActionArea>
    <Box>
    <img  src={myorders.img} style={{width:'72px',height:'72px',marginTop:'10px',float:'left',marginLeft:'10px'}}/>
    <Button variant="contained" style={{ backgroundColor: '#F63E7B',marginTop:'18px' }}>DELETE</Button><br/>
    <Button variant="contained" style={{ backgroundColor: '#FFE3E3',marginTop:'6px',color:'#FF4545' }}>pending</Button>

    </Box>
  
    <br/>
  <CardContent>
    <Typography gutterBottom variant="h6" component="div">
  Name: {myorders.name}
    </Typography>
    <Typography gutterBottom variant="h6" component="div" style={{color: '#F63E7B'}}>
      Price: ${myorders.price}
    </Typography>
    <Typography variant="body2" color="text.secondary">
            {myorders.description}
    </Typography>
    <Typography variant="body2" color="text.secondary">
          Adress : {myorders.adress}
          
    </Typography>
    <Typography variant="body2" color="text.secondary">
          Phone : {myorders.phone}
          
    </Typography>
  </CardContent>
</CardActionArea>
</Card>
 
    </Grid>


  ))
}






    
</Grid>
                                </Container>
        </div>
    );
};

export default UserOrders;