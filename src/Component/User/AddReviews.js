import React, {useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {useHistory,useLocation,NavLink} from "react-router-dom";
import {Alert, CircularProgress, Container, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AddReviews = () => {
              

   
    const {  user}=UseAuth();
    


    
    const [success, setSuccess] = useState(false);

    const[review,setReview]=useState({});
    const handleOnBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = {...review};

        newReviewData[field] = value;
        console.log(newReviewData)
        setReview(newReviewData);

    }
     const username=user.displayName;
    const userEmail=user.email;
    const description=review.reviewdescription;
    const rating=review.rating;

    const  handleAddReview=(e)=>{
        const reviewdata={username,userEmail,description,rating};
        fetch('https://warm-gorge-48984.herokuapp.com/addreviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewdata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    e.target.reset();
                    setSuccess(true);
                }
            })
        e.preventDefault();


    }





    return (
        <div>
            
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
                    {success && <Alert severity="success">Review Added successfully!</Alert>}

                    <Typography variant="h5" sx={{mt:6}} gutterBottom>Add A Review</Typography>

                    <form onSubmit={handleAddReview}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            defaultValue={user.email}
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            defaultValue={user.displayName}
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />


                        
                             <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Rating"
                            type="number"
                           
                            name="rating"
                            onBlur={handleOnBlur}
                            variant="standard" />

                             <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Review"
                            multiline rows={6} 
                            name="reviewdescription"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Review</Button>
                       
                       

                    </form>
                   
                    </Box>

                </Grid>




            </Grid>

        </Container>

        </div>
    );
};

export default AddReviews;