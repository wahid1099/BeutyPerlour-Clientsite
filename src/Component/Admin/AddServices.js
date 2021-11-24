import React, {useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {useHistory,useLocation,NavLink} from "react-router-dom";
import {Alert, CircularProgress, Container, TextField,Input} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const AddServices = () => {


    

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState(null);
    const [success, setSuccess] = useState(false);

    


    const handleAddservice = e => {
        e.preventDefault();
        if (!img) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('img', img);
        formData.append('description', description);

        fetch('https://warm-gorge-48984.herokuapp.com/Addservices', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                   
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
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
                <Box  >
                {success && <Alert severity="success">Service Added successfully!</Alert>}

                <Typography variant="h5" sx={{mt:6}} gutterBottom>Add A Review</Typography>

                <form onSubmit={handleAddservice}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Service Name"
                        name="name"
                        required
                    onChange={e => setName(e.target.value)}

                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Service Price"
                       
                        name="price"
                        required
                       onChange={e => setPrice(e.target.value)}

                        variant="standard" />

                           <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImg(e.target.files[0])}
                />

                    
                         <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Sercie Details"
                        type="text"
                        multiline rows={6} 
                        name="description"
                        required
                        onChange={e => setDescription(e.target.value)}
                        variant="standard" />

                         

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Service</Button>
                   
                   

                </form>
               
                </Box>

            </Grid>




        </Grid>

    </Container>
    );
};

export default AddServices;