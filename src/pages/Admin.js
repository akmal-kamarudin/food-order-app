import React, { useState } from "react";
import { SnackbarProvider } from "notistack";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import OrderAppBar from "../components/OrderAppBar";
import { Grid } from "@mui/material";

const Admin = () => {
  const [isValid, setIsValid] = useState(false);
  const showModalHandler = () => setIsValid(true);
  const hideModalHandler = () => setIsValid(false);

  return (
    <>
      <SnackbarProvider>
        <OrderAppBar modalHandler={showModalHandler} />
        <Grid container direction="row" sx={{ height: "80vh" }}>
          <Grid item lg={2} xs={3}>
            <Sidebar />
          </Grid>
          <Grid item lg={10} xs={9}>
            <Main />
          </Grid>
        </Grid>
      </SnackbarProvider>
    </>
  );
};

export default Admin;
