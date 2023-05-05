import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import LightButton from "../assets/LightButton";
import DarkButton from "../assets/DarkButton";
import { Box, Grid, Modal, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const OrderModal = (props) => {
  const { isValid, hideModalHandler } = props;
  const { items, totalAmount } = useContext(CartContext);

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

  const cartStyle = {
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%, -50%)",
    width: { xs: 400, sm: 400, lg: 400 },
    bgcolor: "background.paper",
    borderRadius: "10px",
    border: "2px solid black",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal keepMounted open={isValid} onClose={hideModalHandler}>
        <Box sx={cartStyle}>
          <Typography variant="h6" color={grey[800]} sx={{ fontWeight: "bold", mb: 2 }}>
            Order List
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ my: 1 }}
          >
            <Grid sx={{ minWidth: "150px" }}>
              <Grid>
                <Typography
                  variant="subtitle1"
                  color={grey[800]}
                  sx={{ fontWeight: "bold" }}
                >
                  Menu
                </Typography>
              </Grid>
            </Grid>

            <Grid>
              <Typography
                variant="subtitle1"
                color={grey[800]}
                sx={{ fontWeight: "bold" }}
              >
                Quantity
              </Typography>
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
                  Price
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ minWidth: "90px" }}>
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
                  Total
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {renderCartItem.length > 0 ? renderCartItem : "No items are added to the cart."}

          <Box sx={{ borderTop: "2px solid black", my: 2 }} />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Typography variant="subtitle1" color={grey[800]} sx={{ fontWeight: "bold" }}>
              Total Amount
            </Typography>
            <Typography variant="subtitle1" color={grey[800]} sx={{ fontWeight: "bold" }}>
              {`$${totalAmount}`}
            </Typography>
          </Grid>
          <LightButton
            variant="contained"
            size="small"
            type="submit"
            sx={{
              width: "5rem",
              borderRadius: "16px",
              boxShadow: 4,
              textTransform: "capitalize",
              mt: 2,
              mr: 1,
            }}
            onClick={hideModalHandler}
          >
            Close
          </LightButton>
          <DarkButton
            variant="contained"
            size="small"
            type="submit"
            sx={{
              width: "5rem",
              borderRadius: "16px",
              boxShadow: 4,
              textTransform: "capitalize",
              mt: 2,
            }}
            // onClick={() => deleteHandler(food.id)}
          >
            Order
          </DarkButton>
        </Box>
      </Modal>
    </div>
  );
};

export default OrderModal;
