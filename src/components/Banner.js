import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import banner from "../images/banner-pic.jpg";
import LightButton from "../assets/LightButton";

const Banner = () => {
  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          alt="Banner"
          src={banner}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            color={grey[50]}
            sx={{
              fontWeight: "bold",
              letterSpacing: "0.2em",
              m: 1,
              fontSize: {
                xs: "1.5rem",
                md: "2rem",
                lg: "3rem",
              },
            }}
          >
            SHINE DINE
          </Typography>
          <Typography
            variant="subtitle1"
            color={grey[50]}
            sx={{
              fontWeight: "bold",
              letterSpacing: "0.1em",
              m: 1,
              fontSize: {
                xs: "0.8rem",
                md: "1.2rem",
                lg: "1.6rem",
              },
            }}
          >
            WHERE FOOD MEETS PEOPLE
          </Typography>
          <LightButton
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            sx={{
              width: "15ch",
              borderRadius: 8,
              m: 4,
              fontSize: {
                xs: "0.6rem",
                md: "0.8rem",
                lg: "1rem",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                letterSpacing: "0.1em",
                fontWeight: "bold",
                fontSize: {
                  xs: "0.6rem",
                  md: "0.8rem",
                  lg: "1rem",
                },
              }}
            >
              DISCOVER
            </Typography>
          </LightButton>
        </Box>
      </Grid>
    </>
  );
};

export default Banner;
