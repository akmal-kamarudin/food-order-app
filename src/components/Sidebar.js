import React from "react";
import { Grid, Typography } from "@mui/material";

const Sidebar = () => {
  return (
    <>
      <Grid>
        <Typography
          variant="h5"
          sx={{
            p: 2,
            fontWeight: "bold",
            fontSize: {
              xs: "1.1rem",
              sm: "1.3rem",
              lg: "1.5rem",
            },
          }}
        >
          Dashboard
        </Typography>
      </Grid>
    </>
  );
};

export default Sidebar;
