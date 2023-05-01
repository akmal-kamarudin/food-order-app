import React, { useState, useEffect } from "react";
import DarkButton from "../styles/DarkButton";
import { Grid, Typography, TextField, OutlinedInput } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const AdminForm = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ minHeight: "70vh" }}
      >
        <Grid>
          <Typography variant="h5" color={grey[900]} sx={{ fontWeight: "bold", mt: 2 }}>
            Add Food Items
          </Typography>
        </Grid>
        <form
        //  onSubmit={loginButton}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              m: 2,
              width: "50ch",
              height: "42ch",
              borderRadius: "6px",
              bgcolor: blueGrey[100],
            }}
          >
            <TextField
              id="outlined-basic"
              label="Name *"
              variant="outlined"
              type="text"
              // value={inputs.userName}
              // onChange={(e) =>
              //   setInputs((inputs) => ({ ...inputs, userName: e.target.value }))
              // }
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <TextField
              id="outlined-basic"
              label="Description *"
              variant="outlined"
              type="text"
              // value={inputs.password}
              // onChange={(e) =>
              //   setInputs((inputs) => ({ ...inputs, password: e.target.value }))
              // }
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <TextField
              id="outlined-basic"
              label="Price *"
              variant="outlined"
              type="text"
              // value={inputs.password}
              // onChange={(e) =>
              //   setInputs((inputs) => ({ ...inputs, password: e.target.value }))
              // }
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <OutlinedInput
              size="small"
              type="file"
              sx={{ mr: 2, mb: 2, width: "44.5ch" }}
            />

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                mr: 2,
              }}
            >
              <DarkButton
                variant="contained"
                size="medium"
                type="submit"
                sx={{
                  mr: 0.5,
                  width: "25ch",
                }}
                // onClick={() => setErrorMessage(errorMessage)}
              >
                Add
              </DarkButton>
              <DarkButton
                variant="contained"
                size="medium"
                type="submit"
                sx={{
                  ml: 0.5,
                  width: "25ch",
                }}
                // onClick={() => setErrorMessage(errorMessage)}
              >
                Cancel
              </DarkButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default AdminForm;
