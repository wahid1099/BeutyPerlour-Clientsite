import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
const Testimonials = () => {
  return (
    <div>
      <Container>
        <Typography variant="h4" sx={{ mb: 6, pt: 6 }}>
          Testimonials
        </Typography>

        <Grid container spacing={1} sx={{ mb: 5 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title="Nash Patrik"
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography sx={{ textAlign: "start" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title="Nash Patrik"
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography sx={{ textAlign: "start" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title="Nash Patrik"
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography sx={{ textAlign: "start" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonials;
