import React, { useState } from "react";
// import CartProvider from "../context/CartProvider";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Meals from "../components/Meals";
import CartAppBar from "../components/CartAppBar";
import CartModal from "../components/CartModal";
import OrderModal from "../components/OrderModal";
import { Grid } from "@mui/material";

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
      <AboutUs />
      <Grid>
        <Meals />
      </Grid>
    </>
  );
};

export default Users;
