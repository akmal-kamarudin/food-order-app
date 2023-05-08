import React, { useState } from "react";
import { SnackbarProvider } from "notistack";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import CartAppBar from "../components/CartAppBar";
import OrderModal from "../components/OrderModal";
import { Grid } from "@mui/material";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showOrderModal = () => setIsOpen(true);
  const hideModalHandler = () => setIsOpen(false);

  return (
    <>
      <SnackbarProvider>
        <CartAppBar modalHandler={showOrderModal} />
        {isOpen && <OrderModal isOpen={isOpen} hideModalHandler={hideModalHandler} />}
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
