import React from "react";
import { Container, Typography ,Button} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Contactus = () => {
  return (
    <div style={{backgroundColor: "#FFF8F5",marginTop:'45px'}}>
      <hr/>
      <Container>
        <Typography variant="h4" sx={{ mb: 6, pt: 3 }}>
          Let us handle your <br />
          project, professionally.
        </Typography>

        <Grid container spacing={1} sx={{mb:5}}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: 368,
                maxWidth: "100%",
                paddingLeft: "140px",
              }}
            >
              <TextField fullWidth label="First Name" id="fullWidth" />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: 368,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Last Name" id="fullWidth" />
            </Box>
          </Grid>
        </Grid>

        
        <Grid container spacing={1} sx={{mb:5}}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: 368,
                maxWidth: "100%",
                paddingLeft: "140px",
              }}
            >
              <TextField fullWidth label="Email Adress" id="fullWidth" />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: 368,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Phone Number" id="fullWidth" />
            </Box>
          </Grid>
        </Grid>


        <Box
              sx={{
                width: 810,
                maxWidth: "100%",
                paddingLeft: "140px",
                height: "200px",
              }}
            >
              <TextField fullWidth label="Your Massage" id="fullWidth"  multiline rows={6}  variant="standard"/>
              <Button variant="contained" style={{ backgroundColor: '#F63E7B',marginTop:'15px' }}>Send Message</Button>
           
            </Box>
      </Container>
    </div>
  );
};

export default Contactus;
