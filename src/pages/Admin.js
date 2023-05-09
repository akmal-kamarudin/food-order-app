import React, { useState } from "react";
import { SnackbarProvider } from "notistack";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import CartAppBar from "../components/CartAppBar";
import OrderModal from "../components/OrderModal";
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showOrderModal = () => setIsOpen(true);
  const hideModalHandler = () => setIsOpen(false);

  return (
    <>
      <SnackbarProvider>
        <CartAppBar modalHandler={showOrderModal} />
        <OrderModal isOpen={isOpen} hideModalHandler={hideModalHandler} />
        <Grid container direction="row" sx={{ minWidth: 640, minHeight: 660 }}>
          <Grid item lg={2} md={2} sm={3} xs={3} sx={{ bgcolor: grey[50] }}>
            <Sidebar />
          </Grid>
          <Grid item lg={10} md={10} sm={9} xs={9} sx={{ bgcolor: grey[200] }}>
            <Main />
          </Grid>
        </Grid>
      </SnackbarProvider>
    </>
  );
};

export default Admin;
