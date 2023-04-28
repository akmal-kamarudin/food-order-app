import React from "react";
import { Button, Typography, Toolbar, Box, Avatar, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartAppBar = () => {
  const cartItemsCount = 5; // Replace with the actual number of items in the cart

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ position: "fixed", top: 10, right: 0, zIndex: 1 }}>
          <Toolbar>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: 10, textTransform: "capitalize" }}
            >
              <Avatar sx={{ bgcolor: "transparent", m: 0 }}>
                <ShoppingCartIcon />
              </Avatar>
              <Typography variant="subtitle3" sx={{ fontWeight: "bold", m: 0 }}>
                Your Cart
              </Typography>
              <Badge
                badgeContent={cartItemsCount}
                color="error"
                sx={{ ml: 2, mb: 4 }}
              ></Badge>
            </Button>
          </Toolbar>
        </Box>
      </Box>
    </>
  );
};

export default CartAppBar;
