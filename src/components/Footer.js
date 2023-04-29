import React, { useState, useEffect } from "react";
import "../App.css";
import LightButton from "../styles/LightButton";
import { Grid, Button, Box, Typography } from "@mui/material";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          py: 2,
          backgroundColor: "rgba(25, 25, 32, 1)",
        }}
      >
        <Grid>
          <Box
            component="img"
            sx={{
              height: 300,
              width: 424,
              py: 2,
            }}
            alt="App-logo"
            src={logo}
          />
        </Grid>
        <Grid>
          <LightButton
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
            sx={{
              width: "15ch",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Admin
            </Typography>
          </LightButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
