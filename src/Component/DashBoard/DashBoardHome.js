import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { BiMenu,BiCart,BiLike } from "react-icons/bi";
import { IoIosListBox } from "react-icons/io";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BsFillCartCheckFill,BsFillPersonPlusFill,BsJournalPlus,BsFillStarFill,BsFillArchiveFill } from "react-icons/bs";
import UserOrders from '../User/UserOrders';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import UseAuth from "../../Hooks/UseAuth";
import {NavLink} from "react-router-dom";
import Button from '@mui/material/Button';
import AddReviews from '../User/AddReviews';
import MakeAdmin from '../Admin/MakeAdmin';
import ManageOrders from '../Admin/ManageOrders';
import AddServices from '../Admin/AddServices';
import ManageServices from '../Admin/ManageServices';
import ManageReviews from '../Admin/ManageReviews';
import AdminRoute from '../../PrivateRoute/AdminRoute';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

const DashBoardHome = () => {

   const{logout,user,admin}=UseAuth();
   let { path, url } = useRouteMatch();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };


    return (
        <Box sx={{ display: 'flex' }} style={{backgroundColor:'#F3F1FF'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
           <BiMenu/>
          </IconButton>

          <Typography variant="h6" noWrap component="div">
           DashBoard
          </Typography>
         

          <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          ml:'840px'
          
        }}
      >
          {         user?.email?

<Box>
    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
        <Button color="inherit">Dashboard</Button>
    </NavLink>
    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
        <Button color="inherit">Home</Button>
    </NavLink>
    <Button onClick={logout} color="inherit">Log Out</Button>
    <Button  color="inherit">  {user.displayName}</Button>

</Box>
:   <NavLink style={{ textDecoration: 'none' }} to="/login">
    <Button color="error"  variant="contained">Login</Button>
</NavLink>
}


</Box>
</Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <BiMenu/> :  <BiMenu/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {         user.email && admin ?   
          
        
              
      <MenuList >
      <MenuItem>
      <Link to={`${url}/manageorder`} style={{textDecoration: 'none',color: '#000'}}><ListItemText><BsFillCartCheckFill/>   Manage Orders</ListItemText></Link>
       
      </MenuItem>
      <MenuItem>
      <Link to={`${url}/addservice`} style={{textDecoration: 'none',color: '#000'}}><ListItemText><BsJournalPlus/>Add Service</ListItemText></Link>
       
       
      </MenuItem>
      <MenuItem>
      <Link to={`${url}/manageservice`} style={{textDecoration: 'none',color: '#000'}}><ListItemText><BsFillArchiveFill/>Manage Service</ListItemText></Link>
  
      
       
      </MenuItem>
      <MenuItem>
      <Link to={`${url}/makeAdmin`} style={{textDecoration: 'none',color: '#000'}}><ListItemText><BsFillPersonPlusFill/> Make Admin</ListItemText></Link>
 
 
</MenuItem>
<MenuItem>
<Link to={`${url}/managereviews`} style={{textDecoration: 'none',color: '#000'}}><ListItemText><BsFillStarFill/>Manage Reviews</ListItemText></Link>
  
 
          </MenuItem>
        </MenuList>
          
          :  
          
     

              
      <MenuList >
      <MenuItem>
      <Link to={`${url}/book`} style={{textDecoration: 'none',color: '#000'}}>   <ListItemText><BiCart/> Book</ListItemText></Link>
      </MenuItem>
      <MenuItem>
      <Link to={`${url}/mybookingList`} style={{textDecoration: 'none',color: '#000'}}>   <ListItemText><IoIosListBox/> Booking List</ListItemText></Link>

        
       
      </MenuItem>
      <MenuItem>
      
      <Link to={`${url}/AddReviews`} style={{textDecoration: 'none',color: '#000'}}><ListItemText><BiLike/> Reviews</ListItemText></Link>
       
      </MenuItem>
    
        </MenuList>
          
          }
         
      
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <Box
                component="main"
                sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <h2>Welcome to dashboard {user.displayName}</h2>

                <Switch>
                                           {/*-------------------------------- User routes--------------------------------- */}

                    <Route path={`${path}/mybookingList`}>
                        <UserOrders></UserOrders>

                    </Route>


                  <Route exact  path={`${path}/AddReviews`}>
                        <AddReviews></AddReviews>

                    </Route>



                        {/*-------------------------------- admin routes--------------------------------- */}
                        {/*-------------------------------- admin routes--------------------------------- */}
                    

                    <AdminRoute path={`${path}/manageorder`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addservice`}>
                        <AddServices></AddServices>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageservice`}>
                        <ManageServices></ManageServices>
                    </AdminRoute>
                    <AdminRoute path={`${path}/managereviews`}>
                        <ManageReviews></ManageReviews>
                    </AdminRoute>
                  
                    
                  
                </Switch>

            </Box>
            </Main>
        </Box>
       
    );

}




export default DashBoardHome;