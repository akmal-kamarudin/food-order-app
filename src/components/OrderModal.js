import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import LightButton from "../assets/LightButton";
import DarkButton from "../assets/DarkButton";
import { Box, Grid, Modal, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const OrderModal = (props) => {
  const { isValid, hideModalHandler } = props;
  const { items, addItem, removeItem, totalAmount } = useContext(CartContext);

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
          <Grid>
            <Typography variant="subtitle1" color={grey[800]} sx={{ fontWeight: "bold" }}>
              {cartItem.name}
            </Typography>
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
                {`$${cartItem.price}`}
              </Typography>
              <Box
                sx={{
                  px: 0.5,
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
          </Grid>

          <Grid>
            <LightButton
              variant="contained"
              size="small"
              type="submit"
              sx={{
                borderRadius: "8px",
                boxShadow: 4,
                mt: 2,
                mr: 1,
              }}
              onClick={() => addItem(cartItem)}
            >
              +
            </LightButton>
            <LightButton
              variant="contained"
              size="small"
              type="submit"
              sx={{
                borderRadius: "8px",
                boxShadow: 4,
                mt: 2,
              }}
              onClick={() => removeItem(cartItem.id)}
            >
              -
            </LightButton>
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
    width: { xs: 380, sm: 500, lg: 600 },
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
            My Cart
          </Typography>

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
