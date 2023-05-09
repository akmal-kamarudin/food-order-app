import React, { useContext, useState, useEffect } from "react";
import ItemsContext from "../context/ItemsContext";
import MealsItem from "./MealsItem";
import { Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Meals = () => {
  const { itemsData } = useContext(ItemsContext);
  const [columnX, setColumnX] = useState(0);

  // Display Food Items
  const renderFoodItem = itemsData.map((foodItem) => {
    return (
      <Grid item xs={3} sm={6} md={4} lg={3} key={foodItem.id}>
        {<MealsItem food={foodItem} />}
      </Grid>
    );
  });

  useEffect(() => {
    if (renderFoodItem.length <= 2) {
      setColumnX(6);
    } else if (renderFoodItem.length === 3) {
      setColumnX(9);
    } else if (renderFoodItem.length >= 4) {
      setColumnX(12);
    }
  }, [renderFoodItem]);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        <Typography
          variant="h4"
          color={grey[900]}
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "1.6rem",
              md: "1.8rem",
              lg: "2.2rem",
            },
          }}
        >
          Available Food
        </Typography>
        <Box sx={{ flexGrow: 1, m: 10 }}>
          {renderFoodItem.length > 0 ? (
            <>
              <Grid
                container
                spacing={{ xs: 6, sm: 6, md: 6, lg: 6 }}
                columns={{ xs: 3, sm: 6, md: 8, lg: columnX }}
              >
                {renderFoodItem}
              </Grid>
            </>
          ) : (
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                m: 4,
                fontSize: {
                  xs: "1.2rem",
                  md: "1.4rem",
                  lg: "1.6rem",
                },
              }}
            >
              Sorry, no Foods are available
            </Typography>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default Meals;
