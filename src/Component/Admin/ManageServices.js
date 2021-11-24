import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Alert,Typography } from '@mui/material';
import Zoom from 'react-reveal/Zoom';

const ManageServices = () => {


    const[allservices,setAllservices]=useState([]);

const [success, setSuccess] = useState(false);




useEffect(() => {

    fetch(`https://warm-gorge-48984.herokuapp.com/services`)
    .then(res=>res.json())
    .then(data=>
        setAllservices(data)
       
       )

   },[]);

   
   const handleDelete = (id) => {
    fetch(`https://warm-gorge-48984.herokuapp.com/deleteservice/${id}`, {
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
      <Zoom>
        <TableContainer component={Paper}>
        <Typography variant="h5" sx={{mt:6}} gutterBottom>Manage Services</Typography>
        {success && <Alert severity="success">Service Deleted successfully!</Alert>}
   <Table sx={{ minWidth: 850 }}  aria-label="simple table">
     <TableHead>
       <TableRow>
         <TableCell>Service name</TableCell>
         <TableCell align="right">Service Price</TableCell>
       
         <TableCell align="right">Image</TableCell>

         <TableCell align="right">Descrtiption</TableCell>
         
         <TableCell align="right">Action</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {allservices.map((row) => (
         <TableRow
           key={row.name}
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         >
           <TableCell component="th" scope="row">
             {row.name}
           </TableCell>
           
           <TableCell align="right">{row.price}</TableCell>
           <TableCell align="right"><img src={row.img} style={{width:'40px'}}/></TableCell>
           <TableCell align="right">{row.description}</TableCell>
         
           <TableCell align="right"><Button  variant="contained" color="error" onClick={()=> handleDelete(row._id)}>Delete</Button></TableCell>
         </TableRow>
       ))}
     </TableBody>
   </Table>
   
 </TableContainer>
 </Zoom>
 
    );
};

export default ManageServices;