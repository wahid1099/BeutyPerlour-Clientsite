import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Alert,Typography } from '@mui/material';

const ManageReviews = () => {
    const[allreview,settAllReviews]=useState([]);

    const [success, setSuccess] = useState(false);
    
    
    
    
    useEffect(() => {
    
        fetch(`https://warm-gorge-48984.herokuapp.com/reviews`)
        .then(res=>res.json())
        .then(data=>
            settAllReviews(data)
           
           )
    
       },[]);

       const handleDelete = (id) => {
        fetch(`https://warm-gorge-48984.herokuapp.com/deletereviews/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    // setShow(false);
                    setSuccess(true)
                    
                //    setOpen(false)
    
    
    
                }
            });
    
    };
    
    
    return (
        <TableContainer component={Paper}>
        <Typography variant="h5" sx={{mt:6}} gutterBottom>Manage Reviews</Typography>
        {success && <Alert severity="success">Review deleted successfully!</Alert>}
   <Table sx={{ minWidth: 850 }}  aria-label="simple table">
     <TableHead>
       <TableRow>
         <TableCell>User name</TableCell>
         <TableCell align="right">User Email</TableCell>
         <TableCell align="right">User Rating</TableCell>
       
         

         <TableCell align="right">Descrtiption</TableCell>
         
         <TableCell align="right">Action</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {allreview.map((row) => (
         <TableRow
           key={row._id}
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         >
           <TableCell component="th" scope="row">
             {row.username}
           </TableCell>
           
           <TableCell align="right">{row.userEmail}</TableCell>
           <TableCell align="right">{row.rating}</TableCell>
           
           <TableCell align="right">{row.description}</TableCell>
         
           <TableCell align="right"><Button  variant="contained" color="error" onClick={()=> handleDelete(row._id)}>Delete</Button></TableCell>
         </TableRow>
       ))}
     </TableBody>
   </Table>
   
 </TableContainer>
    );
};

export default ManageReviews;