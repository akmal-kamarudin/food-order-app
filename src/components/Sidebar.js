import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Sidebar = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ height: "70vh", bgcolor: grey[50] }}
      >
        <Grid>
          <Typography
            variant="h6"
            sx={{
              p: 2,
              fontWeight: "bold",
              fontSize: {
                xs: "1.1rem",
                md: "1.2rem",
                lg: "1.3rem",
              },
            }}
          >
            Dashboard
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Sidebar;
