import React, {useState} from 'react';
import UseAuth from "../Hooks/UseAuth";
import {useHistory,useLocation,NavLink} from "react-router-dom";
import {Alert, CircularProgress, Container, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
    const [logindata,setLogindata]=useState({});
    const {  user, isLoading, autherror, registerUser, loginUser, signInwithGoogle, logout}=UseAuth();
    const location=useLocation();
    const history=useHistory();


    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...logindata};
        newLoginData[field] = value;
        console.log(field,value,newLoginData);

        setLogindata(newLoginData);

    }
    const  handleLoginSubmit=(e)=>{
        loginUser(logindata.email,logindata.password,location,history);
        e.preventDefault();
    }

    const handleGoogleSignIn=()=>{
        signInwithGoogle(location,history);
    }

    return (
        <Container sx={{mt:5}}>
            <Grid container spacing={2}

                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
            >
                <Grid  xs={12} md={6}>
                    <Box sx={{border: 1 }} >
                    <Typography variant="h5" sx={{mt:6}} gutterBottom>Login To Your Account</Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login SuccesFully!</Alert> }
                        {autherror &&<Alert severity="error">{autherror}</Alert> }


                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn}  variant="contained" sx={{mb:4}}><BsGoogle/>  Google Sign In</Button>
                    </Box>

                </Grid>




            </Grid>

        </Container>

    );
};

export default Login;