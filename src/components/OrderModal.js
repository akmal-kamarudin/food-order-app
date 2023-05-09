import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import OrderList from "./OrderList";
import LightButton from "../assets/LightButton";
import { Box, Grid, Modal, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const OrderModal = (props) => {
  const { isOpen, hideModalHandler } = props;
  const { totalAmount } = useContext(CartContext);

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
    <>
      <Modal keepMounted open={isOpen} onClose={hideModalHandler}>
        <Box sx={cartStyle}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Typography
              variant="h4"
              color={grey[800]}
              sx={{ fontWeight: "bold", letterSpacing: "0.1em" }}
            >
              SHINE DINE
            </Typography>
            <Typography variant="subtitle1" color={grey[800]} sx={{ fontWeight: "bold" }}>
              WHERE FOOD MEETS PEOPLE
            </Typography>
            <Typography variant="h6" color={grey[800]} sx={{ fontWeight: "bold", my: 2 }}>
              Official Receipt
            </Typography>
          </Grid>

          {totalAmount !== 0 ? <OrderList /> : ""}

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
        </Box>
      </Modal>
    </>
  );
};

export default OrderModal;
