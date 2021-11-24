import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Container} from "@mui/material";
import logo from '../../Image_Icon/Group 33092.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import UseAuth from "../../Hooks/UseAuth";
import {NavLink} from "react-router-dom";








const Menu = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const{logout,user}=UseAuth();

    const darkTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#f8f2f2',
            },
        },
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
                    <Container>

                        <Toolbar>
                            <Typography
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <img src={logo} style={{width:'127px',height:'48px'}} />
                            </Typography>

                            <Typography variant="" sx={{ flexGrow: 1 }} align="right">
                                <NavLink style={{ textDecoration: 'none', color: '#000' }} to="/">
                                    <Button color="inherit">Home</Button></NavLink>

                                <Button color="inherit">Our Portfolio</Button>
                                <Button color="inherit">Our Team</Button>
                                <Button color="inherit">Contact us</Button>
                                <Button color="inherit">



                                {         user?.email?

                                        <Box>
                                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                                <Button color="error">Dashboard</Button>
                                            </NavLink>
                                            <Button onClick={logout} color="inherit">Log Out</Button>
                                            <Button  color="inherit">  {user.displayName}</Button>

                                        </Box>
                                        :   <NavLink style={{ textDecoration: 'none' }} to="/login">
                                            <Button color="error"  variant="contained">Login</Button>
                                        </NavLink>
                                }




                                </Button>

                            </Typography>

                        </Toolbar>

                    </Container>
                </AppBar>
            </ThemeProvider>

        </Box>

    );
};

export default Menu;