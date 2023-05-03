import React, { useState, useEffect } from "react";
import { CartProvider } from "../context/CartProvider";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { Grid } from "@mui/material";

const Admin = () => {
  return (
    <>
      <Grid container direction="row" sx={{ height: "80vh" }}>
        <Grid item lg={2} xs={3}>
          <Sidebar />
        </Grid>
        <Grid item lg={10} xs={9}>
          <Main />
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;
