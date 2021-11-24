import React,{useEffect, useState}  from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Alert,Typography } from '@mui/material';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ManageOrders = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


const[allappointments,setAllapoinments]=useState([]);

const [success, setSuccess] = useState(false);


useEffect(() => {

    fetch(`https://warm-gorge-48984.herokuapp.com/allappointments`)
    .then(res=>res.json())
    .then(data=>
        setAllapoinments(data)
       
       )

   },[]);

   
   const handleDelete = (id) => {
    fetch(`https://warm-gorge-48984.herokuapp.com/deleteaappoinment/${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount) {
                // setShow(false);
                setSuccess(true)
                
               setOpen(false)



            }
        });

};


console.log(allappointments);
    return (
       
        
    <TableContainer component={Paper}>
         <Typography variant="h5" sx={{mt:6}} gutterBottom>Manage Orders</Typography>
         {success && <Alert severity="success">Order Canceled successfully!</Alert>}
    <Table sx={{ minWidth: 850 }}  aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Service name</TableCell>
          <TableCell align="right">User Name</TableCell>
          <TableCell align="right">User Email</TableCell>
          <TableCell align="right">Image</TableCell>

          <TableCell align="right">Adress</TableCell>
          <TableCell align="right">Phone</TableCell>
          <TableCell align="right">Ammount</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {allappointments.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.username}</TableCell>
            <TableCell align="right">{row.useremail}</TableCell>
            <TableCell align="right"><img src={row.img} style={{width:'40px'}}/></TableCell>
            <TableCell align="right">{row.adress}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">Pending</TableCell>
            <TableCell align="right"><Button  variant="contained" color="error" onClick={()=> handleDelete(row._id)}>Cancel</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
  </TableContainer>
  
    );
};

export default ManageOrders;