import React from "react";
import { Grid, Typography } from "@mui/material";

const Sidebar = () => {
  return (
    <>
      <Grid>
        <Typography
          variant="h4"
          sx={{
            p: 2,
            fontWeight: "bold",
            fontSize: {
              xs: "1.5rem",
              sm: "1.6rem",
              lg: "1.8rem",
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
