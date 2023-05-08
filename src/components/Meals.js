import React, { useContext } from "react";
import ItemsContext from "../context/ItemsContext";
import MealsItem from "./MealsItem";
import { Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Meals = () => {
  const { itemsData } = useContext(ItemsContext);

  // Display Food Items
  const renderFoodItem = itemsData.map((foodItem) => {
    return (
      <Grid item xs={"auto"} sm={"auto"} md={"auto"} key={foodItem.id}>
        {<MealsItem food={foodItem} />}
      </Grid>
    );
  });

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ bgcolor: grey[600] }}
      >
        <Typography variant="h5" color={grey[900]} sx={{ fontWeight: "bold", mt: 2 }}>
          Available Food
        </Typography>
        <Box sx={{ flexGrow: 1, m: 10 }}>
          {renderFoodItem.length > 0 ? (
            <>
              <Grid
                container
                spacing={{ xs: 4, md: 6 }}
                columns={{ xs: 1, sm: 2, md: 3 }}
              >
                {renderFoodItem}
              </Grid>
            </>
          ) : (
            <Typography variant="h6" sx={{ fontWeight: "bold", m: 4 }}>
              Sorry, no Foods are available
            </Typography>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default Meals;
