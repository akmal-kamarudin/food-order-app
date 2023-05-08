import React, { useState } from "react";
import AdminForm from "./AdminForm";
import Meals from "./Meals";
import DarkButton from "../assets/DarkButton";
import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Main = () => {
  const [isValid, setIsValid] = useState(false);
  const showAddItemForm = () => setIsValid(true);
  const hideAddItemForm = () => setIsValid(false);

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h5" color={grey[900]} sx={{ fontWeight: "bold", m: 5 }}>
          Add Food Items
        </Typography>
        <Typography
          variant="subtitle1"
          color={grey[900]}
          sx={{ fontWeight: "bold", m: 2 }}
        >
          *Click on the button 'Add Food Item' to add more meals to the menu.
        </Typography>

        <Grid sx={{ mb: 20 }}>
          {isValid ? (
            <AdminForm hideAddItemForm={hideAddItemForm} />
          ) : (
            <DarkButton
              variant="contained"
              size="medium"
              sx={{ borderRadius: 2 }}
              onClick={showAddItemForm}
            >
              Add Food Item
            </DarkButton>
          )}
        </Grid>
        <Grid>
          <Meals />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
