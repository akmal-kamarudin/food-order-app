import React, { useState } from "react";
import CartProvider from "../context/CartProvider";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Meals from "../components/Meals";
import CartAppBar from "../components/CartAppBar";
import CartModal from "../components/CartModal";

const Users = () => {
  const [isValid, setIsValid] = useState(false);
  const showModalHandler = () => setIsValid(true);
  const hideModalHandler = () => setIsValid(false);

  return (
    <>
      <CartProvider>
        <CartAppBar modalHandler={showModalHandler} />
        {isValid && <CartModal isValid={isValid} hideModalHandler={hideModalHandler} />}
        <Banner />
        <section>
          <AboutUs />
          <div style={{ marginTop: "15rem" }}>
            <Meals />
          </div>
        </section>
      </CartProvider>
    </>
  );
};

export default Users;
