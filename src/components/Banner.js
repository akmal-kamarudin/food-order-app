import React, { useState, useEffect } from "react";
import { Grid, Button, Box } from "@mui/material";
import banner from "../images/banner-pic.jpg";

const Banner = () => {
  return (
    <>
      <Grid>
        <Box
          component="img"
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxHeight: 1080,
            maxWidth: 1920,
            opacity: 0.7,
            // position: "fixed",
            // top: 0,
            // left: 0,
            // right: 0,
          }}
          alt="App-logo"
          src={banner}
        />
      </Grid>
    </>
  );
};

export default Banner;
