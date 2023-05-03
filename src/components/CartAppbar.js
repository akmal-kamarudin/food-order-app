import React, { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import CartModal from "./CartModal";
import DarkButton from "../styles/DarkButton";
import { Typography, Toolbar, Box, Avatar, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";

const CartAppBar = () => {
  const { items } = useContext(CartContext);

  const cartItemsCount = items.length; // Replace with the actual number of items in the cart

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <>
      <Box container sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            position: "fixed",
            top: "1%",
            right: "1%",
            zIndex: 1,
          }}
        >
          <Toolbar>
            <DarkButton
              variant="contained"
              size="small"
              sx={{
                borderRadius: 10,
                height: {
                  xs: "2.4rem",
                  md: "2.8rem",
                  lg: "3rem",
                },
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpen}
            >
              <Avatar sx={{ bgcolor: "transparent" }}>
                <ShoppingCartIcon
                  sx={{
                    fontSize: {
                      xs: "1.2rem",
                      md: "1.4rem",
                      lg: "1.6rem",
                    },
                    color: isHover ? grey[900] : grey[100],
                  }}
                />
              </Avatar>
              <Typography
                variant="subtitle3"
                sx={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: {
                    xs: "0.7rem",
                    md: "0.8rem",
                    lg: "0.9rem",
                  },
                }}
              >
                Your Cart
              </Typography>
              <Badge
                badgeContent={cartItemsCount}
                color="error"
                sx={{ ml: 2, mb: 4 }}
              ></Badge>
            </DarkButton>
          </Toolbar>
        </Box>
      </Box>
      <CartModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default CartAppBar;
