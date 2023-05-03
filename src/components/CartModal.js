import React, { useState } from "react";
import { Box, Grid, Modal, Typography } from "@mui/material";
import LightButton from "../styles/LightButton";
import DarkButton from "../styles/DarkButton";
import { grey } from "@mui/material/colors";

const CartModal = (props) => {
  const cartStyle = {
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%, -50%)",
    width: {
      xs: 400,
      sm: 500,
      lg: 600,
    },
    bgcolor: "background.paper",
    borderRadius: "10px",
    border: "2px solid black",
    boxShadow: 24,
    p: 3,
  };

  const { isOpen, onClose } = props;

  return (
    <div>
      <Modal keepMounted open={isOpen} onClose={onClose}>
        <Box sx={cartStyle}>
          <Typography variant="h6" color={grey[800]} sx={{ fontWeight: "bold", mb: 2 }}>
            My Cart
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Grid>
              <Typography
                variant="subtitle1"
                color={grey[800]}
                sx={{ fontWeight: "bold" }}
              >
                Food Name
              </Typography>
              <Typography
                variant="subtitle1"
                color={grey[800]}
                sx={{ fontWeight: "bold" }}
              >
                $Price cart
              </Typography>
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
                // onClick={() => deleteHandler(food.id)}
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
                // onClick={() => deleteHandler(food.id)}
              >
                -
              </LightButton>
            </Grid>
          </Grid>

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
              {`$$$$`}
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
            onClick={onClose}
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

export default CartModal;
