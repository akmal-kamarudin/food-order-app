import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const OrderList = () => {
  const { items } = useContext(CartContext);

  // Display Cart Items
  const renderCartItem = items.map((cartItem) => {
    return (
      <Grid item key={cartItem.id}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ my: 1 }}
        >
          <Grid sx={{ minWidth: "160px" }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="baseline"
            >
              <Typography
                variant="subtitle1"
                color={grey[800]}
                sx={{ fontWeight: "bold", pr: 1 }}
              >
                {cartItem.name}
              </Typography>
            </Grid>
          </Grid>

          <Grid sx={{ minWidth: "40px" }}>
            <Box
              sx={{
                border: "1px solid black",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {`x${cartItem.multiplier}`}
            </Box>
          </Grid>

          <Grid sx={{ minWidth: "80px" }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="baseline"
            >
              <Typography
                variant="subtitle1"
                color={grey[800]}
                sx={{ fontWeight: "bold" }}
              >
                {`$${cartItem.price}`}
              </Typography>
            </Grid>
          </Grid>

          <Grid sx={{ minWidth: "80px" }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="baseline"
            >
              <Typography
                variant="subtitle1"
                color={grey[800]}
                sx={{ fontWeight: "bold" }}
              >
                {`$${cartItem.total}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <>
      <Box sx={{ borderTop: "2px solid black", mt: 1 }} />
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid sx={{ minWidth: "150px" }}>
          <Grid>
            <Typography variant="subtitle1" color={grey[800]} sx={{ fontWeight: "bold" }}>
              Menu
            </Typography>
          </Grid>
        </Grid>

        <Grid>
          <Typography variant="subtitle1" color={grey[800]} sx={{ fontWeight: "bold" }}>
            Quantity
          </Typography>
        </Grid>

        <Grid sx={{ minWidth: "80px" }}>
          <Grid container direction="row" justifyContent="flex-end" alignItems="baseline">
            <Typography variant="subtitle1" color={grey[800]} sx={{ fontWeight: "bold" }}>
              Price
            </Typography>
          </Grid>
        </Grid>

        <Grid sx={{ minWidth: "90px" }}>
          <Grid container direction="row" justifyContent="flex-end" alignItems="baseline">
            <Typography variant="subtitle1" color={grey[800]} sx={{ fontWeight: "bold" }}>
              Total
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ borderTop: "2px solid black", mb: 1 }} />

      {renderCartItem.length > 0 ? renderCartItem : "No items are added to the cart."}
    </>
  );
};

export default OrderList;
