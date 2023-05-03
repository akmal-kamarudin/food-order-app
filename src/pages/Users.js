import React, { useState, useEffect } from "react";
import { CartProvider } from "../context/CartProvider";
// import { AppBar, Toolbar } from "@mui/material";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Meals from "../components/Meals";
import CartAppBar from "../components/CartAppBar";

const Users = () => {
  const [isValid, setIsValid] = useState(false);

  return (
    <>
      <CartAppBar />
      <Banner />
      <section>
        <AboutUs />
        <div style={{ marginTop: "15rem" }}>
          <Meals />
        </div>
      </section>
    </>
    // <CartProvider>
    //   <AppBar />
    //   <Banner />
    //   <section>
    //     <AboutUs />
    //     <div style={{ marginTop: "15rem" }}>
    //       <Meals />
    //     </div>
    //   </section>
    // </CartProvider>
  );
};

export default Users;
