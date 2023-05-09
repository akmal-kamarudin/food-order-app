import React, { useState, useEffect, useContext, useRef } from "react";
import ItemsContext from "../context/ItemsContext";
import { useSnackbar } from "notistack";
import DarkButton from "../assets/DarkButton";
import { Grid, TextField, OutlinedInput } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const AdminForm = (props) => {
  const inputRef = useRef(null);
  const { uploadImage, addNewItem } = useContext(ItemsContext);
  const { enqueueSnackbar } = useSnackbar();
  const [errorMessage, setErrorMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [priceError, setPriceError] = useState(false);

  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    price: "",
    imageFile: null,
    imageLink: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      foodData.imageFile === null ||
      foodData.name === "" ||
      foodData.description === "" ||
      foodData.price === ""
    ) {
      setFoodData({
        name: "",
        description: "",
        price: "",
        imageFile: null,
        imageLink: null,
      });

      inputRef.current.value = "";
      setErrorMessage("warning");

      return;
    } else {
      const imageUrl = await uploadImage(foodData.imageFile);

      setFoodData((food) => ({
        ...food,
        imageLink: imageUrl,
      }));
      setErrorMessage("success");
    }
  };

  useEffect(() => {
    if (foodData.imageLink !== null) {
      const { imageFile, ...food } = foodData;
      addNewItem(food);
      setFoodData({
        name: "",
        description: "",
        price: "",
        imageFile: null,
        imageLink: null,
      });
      props.hideAddItemForm();
    }
  }, [foodData, addNewItem, props]);

  // Error alert
  useEffect(() => {
    const variant = errorMessage;
    const position = { vertical: "top", horizontal: "center" };

    if (errorMessage === "error") {
      enqueueSnackbar("Error! Please select a valid image file (PNG or JPEG).", {
        variant,
        anchorOrigin: position,
        autoHideDuration: 1500,
      });
    } else if (errorMessage === "warning") {
      enqueueSnackbar("Warning! All the fields are mandatory.", {
        variant,
        anchorOrigin: position,
        autoHideDuration: 1500,
      });
    } else if (errorMessage === "success") {
      enqueueSnackbar("Success! Food item is uploaded.", {
        variant,
        anchorOrigin: position,
        autoHideDuration: 2000,
      });
    }

    setErrorMessage("");
  }, [errorMessage, enqueueSnackbar]);

  // Cancel button
  const handleCancel = (e) => {
    e.preventDefault();
    setFoodData({
      name: "",
      description: "",
      price: "",
      imageFile: null,
      imageLink: null,
    });
    props.hideAddItemForm();
  };

  return (
    <>
      <Grid>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              m: 2,
              py: 2,
              width: "50ch",
              borderRadius: "6px",
              bgcolor: blueGrey[100],
              boxShadow: 2,
            }}
          >
            <TextField
              label="Name *"
              variant="outlined"
              type="text"
              value={foodData.name}
              inputProps={{ pattern: ".{0,16}" }}
              onChange={(e) => {
                const name = e.target.value;
                if (name.length > 16) {
                  setNameError(true);
                  setFoodData((data) => ({ ...data, name }));
                } else {
                  setNameError(false);
                  setFoodData((data) => ({ ...data, name }));
                }
              }}
              error={nameError}
              helperText={nameError ? "Name must be 16 characters or less" : ""}
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <TextField
              label="Description *"
              variant="outlined"
              type="text"
              value={foodData.description}
              inputProps={{ pattern: ".{0,24}" }}
              onChange={(e) => {
                const description = e.target.value;
                if (description.length > 24) {
                  setDescError(true);
                  setFoodData((data) => ({ ...data, description }));
                } else {
                  setDescError(false);
                  setFoodData((data) => ({ ...data, description }));
                }
              }}
              error={descError}
              helperText={descError ? "Description must be 24 characters or less" : ""}
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <TextField
              label="Price *"
              variant="outlined"
              type="text"
              value={foodData.price}
              inputProps={{ pattern: "^[0-9]+(.[0-9]{1,2})?$" }}
              onChange={(e) => {
                const price = e.target.value;
                if (price === "" || /^[0-9]+(.[0-9]{1,2})?$/.test(price)) {
                  setPriceError(false);
                  setFoodData((data) => ({ ...data, price }));
                } else {
                  setPriceError(true);
                  setFoodData((data) => ({ ...data, price }));
                }
              }}
              error={priceError}
              helperText={priceError ? "Price must be a numeric value with 2 d.p." : ""}
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <OutlinedInput
              size="small"
              type="file"
              sx={{ mr: 2, mb: 2, width: "44.5ch" }}
              inputRef={inputRef}
              accept="image/png,image/jpeg"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file || !file.type.startsWith("image/")) {
                  setErrorMessage("error");
                  inputRef.current.value = "";
                  return;
                }
                setFoodData((data) => ({ ...data, imageFile: file }));
              }}
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
                onClick={handleCancel}
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
