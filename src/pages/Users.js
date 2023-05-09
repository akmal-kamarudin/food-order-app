import React, { useState } from "react";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Meals from "../components/Meals";
import CartAppBar from "../components/CartAppBar";
import CartModal from "../components/CartModal";
import OrderModal from "../components/OrderModal";
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

const Users = () => {
  const [isValid, setIsValid] = useState(false);
  const showCartModal = () => setIsValid(true);

  const [isOpen, setIsOpen] = useState(false);
  const showOrderModal = () => {
    setIsValid(false);
    setIsOpen(true);
  };

  const hideModalHandler = () => {
    setIsValid(false);
    setIsOpen(false);
  };

  return (
    <>
      <Grid container direction="column" sx={{ minWidth: 650, minHeight: 500 }}>
        <CartAppBar modalHandler={showCartModal} />
        {isValid && (
          <CartModal
            isValid={isValid}
            hideModalHandler={hideModalHandler}
            showOrderModal={showOrderModal}
          />
        )}
        {isOpen && <OrderModal isOpen={isOpen} hideModalHandler={hideModalHandler} />}
        <Banner />
        <Grid sx={{ bgcolor: grey[200] }}>
          <AboutUs />
        </Grid>
        <Grid sx={{ bgcolor: grey[200] }}>
          <Meals />
        </Grid>
      </Grid>
    </>
  );
};

export default Users;
