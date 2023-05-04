import React, { useState } from "react";
import AdminForm from "./AdminForm";
import Meals from "./Meals";
import DarkButton from "../assets/DarkButton";
import { Grid, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const Main = () => {
  const [isValid, setIsValid] = useState(false);
  const showAddItemForm = () => setIsValid(true);
  const hideAddItemForm = () => setIsValid(false);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ bgcolor: grey[200] }}
      >
        <Grid>
          <Box sx={{ flex: 4 }}>
            {isValid ? (
              <AdminForm hideAddItemForm={hideAddItemForm} />
            ) : (
              <DarkButton
                variant="contained"
                size="medium"
                sx={{
                  borderRadius: 2,
                  m: 3,
                  // height: {
                  //   xs: "2rem",
                  //   md: "2.4rem",
                  //   lg: "2.8rem",
                  // },
                }}
                onClick={showAddItemForm}
              >
                Add Food Item
              </DarkButton>
            )}
          </Box>
        </Grid>
        <Grid>
          <Meals sx={{ overflowY: "scroll" }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
