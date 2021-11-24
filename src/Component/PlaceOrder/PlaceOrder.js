import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import {Alert, Button, CircularProgress, Container, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const PlaceOrder = () => {
    const {serviceId}=useParams();
    const[singleservices,setsingleServices]=useState([]);
    const [isLoading,setIsloading]=useState(true);
    const [placeorder,setplaceOrder]=useState({});

    const[userdetails,setUserdetails]=useState('');
    const [success, setSuccess] = useState(false);

    const {user}=UseAuth();




    useEffect(() => {
        fetch(`https://warm-gorge-48984.herokuapp.com/services/${serviceId}`)
            .then(res=>res.json())
            .then(data=>{
                setsingleServices(data)
                setIsloading(false)
            })


    },[]);




    const{_id,name,img,description,price}=singleservices || {}



    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newuserdata={...userdetails};
        newuserdata[field]=value;
        setUserdetails(newuserdata);

    }

    const useremail=user.email;
    const username=user.displayName;
    const adress=userdetails.adress;
    const phone=userdetails.phone;

    const appointmentdetails={name,img,price,useremail,username,adress,phone};
    const handleBookAppinment = e => {

        fetch('https://warm-gorge-48984.herokuapp.com/bookappoinment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentdetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    e.target.reset();
                }
            })


        e.preventDefault();
    }

    if (isLoading){
        return <CircularProgress  />;
    }




    return (
        <div>
            <h2>Place Order</h2>
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

                                <img src={singleservices.img} style={{width:'170px'}}/>
                                <Typography variant="h3"style={{ color: '#141515' }}>

                                </Typography>
                                <Typography variant="h3" >
                                   Service: {singleservices.name}
                                </Typography>
                                <Typography variant="h6" sx={{ my: 5 }} style={{fontSize: 14, fontWeight: 300 }}>
                                  Details:   {singleservices.description}
                                </Typography>
                                <Button variant="contained" style={{ backgroundColor: '#F63E7B',color:'#fff' }} disabled>Price : ${singleservices.price}</Button>
                            </Box>
                        </Grid>



                        <Grid item xs={12} md={6}>
                            <Box sx={{border: 1 }} >
                                <Typography variant="h5" sx={{mt:6}} gutterBottom>Delivery Details</Typography>

                                <form onSubmit={handleBookAppinment}>
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Email"
                                        name="email"
                                        defaultValue={user.email}
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Name"
                                        name="name"
                                        defaultValue={user.displayName}
                                        onBlur={handleOnBlur}
                                        variant="standard" />

                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Adress"
                                        name="adress"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Number"
                                        name="phone"
                                        onBlur={handleOnBlur}
                                        variant="standard" />


                                    <Button sx={{ width: '75%', m: 1 ,mb:5}} type="submit" variant="contained">Book Appoinment</Button>

                                    {success && <Alert severity="success">Appoinment Booked successfully!</Alert>}




                                </form>


                            </Box>


                        </Grid>

                    </Grid>
                </Box>
            </Container>
            
        </div>
    );
};

export default PlaceOrder;