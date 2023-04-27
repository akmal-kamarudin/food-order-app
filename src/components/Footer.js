import React, { useState, useEffect } from "react";
import { Grid, Button, Box } from "@mui/material";
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
          <Button
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
            sx={{
              width: "12ch",
              textTransform: "capitalize",
            }}
          >
            Admin
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
