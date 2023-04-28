import React, { useState, useEffect } from "react";
import { CartProvider } from "../context/CartProvider";
// import { AppBar, Toolbar } from "@mui/material";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Meals from "../components/Meals";
import AppBar from "../styles/CartAppbar";

const Users = () => {
  const [isValid, setIsValid] = useState(false);

  return (
    <>
      <AppBar />
      <Banner />
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
