import React, { useContext, useEffect } from "react";
import ItemsContext from "../context/ItemsContext";
import "../App.css";
import LightButton from "../styles/LightButton";
import { Grid, Box, Typography } from "@mui/material";
import logo from "../images/logo.png";

const Footer = () => {
  const { switchPage, togglePage } = useContext(ItemsContext);

  const switchPageHandler = (e) => {
    e.preventDefault();
    togglePage(switchPage);
  };

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
              // height: {
              //   xs: "30%",
              //   md: "60%",
              //   lg: "100%",
              // },
              // width: {
              //   xs: "auto",
              //   md: "auto",
              //   lg: "auto",
              // },
              // height: "auto",
              // width: "auto",
              maxHeight: 180,
              maxWidth: 255,
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
            size="small"
            type="submit"
            sx={{ width: { xs: "10ch", lg: "14ch" } }}
            onClick={switchPageHandler}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {switchPage === "/" ? "Admin" : "User"}
            </Typography>
          </LightButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
