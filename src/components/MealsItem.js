import React, { useContext } from "react";
import ItemsContext from "../context/ItemsContext";
import CartContext from "../context/CartContext";
import DarkButton from "../assets/DarkButton";
import { grey } from "@mui/material/colors";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
} from "@mui/material";

const MealsItem = (props) => {
  const { removeItem, switchPage } = useContext(ItemsContext);
  const { addItem } = useContext(CartContext);
  const { food } = props;

  // Delete Food
  const deleteHandler = (id) => {
    removeItem(id);
  };

  // Add Food
  const addHandler = (food) => {
    addItem(food);
  };

  return (
    <>
      <Card
        sx={{
          width: 320,
          height: 440,
          borderRadius: "16px",
          boxShadow: 2,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="260"
            image={food.imageLink}
            alt="Food Thumbnail"
          />
          <CardContent sx={{ height: 80 }}>
            <Typography variant="h6" color={grey[800]} sx={{ fontWeight: "bold" }}>
              {food.name}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{ mt: 1 }}
            >
              <Grid item xs={8}>
                <Typography variant="subtitle2" color={grey[600]}>
                  {food.description}
                </Typography>
              </Grid>
              <Typography
                variant="subtitle1"
                color={grey[800]}
                sx={{ fontWeight: "bold" }}
              >
                {`$${food.price}`}
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          {switchPage === "/" ? (
            <DarkButton
              variant="contained"
              size="small"
              type="submit"
              sx={{
                width: "7rem",
                borderRadius: "8px",
                ml: 1,
                mt: 1,
              }}
              onClick={() => addHandler(food)}
            >
              Add To Cart
            </DarkButton>
          ) : (
            <DarkButton
              variant="contained"
              size="small"
              type="submit"
              sx={{
                width: "5rem",
                borderRadius: "8px",
                ml: 1,
                mt: 1,
              }}
              onClick={() => deleteHandler(food.id)}
            >
              Delete
            </DarkButton>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default MealsItem;
