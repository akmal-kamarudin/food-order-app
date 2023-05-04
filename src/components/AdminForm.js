import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ItemsContext from "../context/ItemsContext";
import DarkButton from "../styles/DarkButton";
import { Grid, Typography, TextField, OutlinedInput } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const AdminForm = (props) => {
  const API_URL = "https://freeimage.host/api/1/upload";
  const PROXY_URL = "https://cors-anywhere.herokuapp.com";
  const apiKey = process.env.REACT_APP_IMAGE_API_KEY;

  const { addNewItem } = useContext(ItemsContext);
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
    console.log("uploading...");
    console.log(foodData);
    // const imageUrl = await uploadImage(foodData.imageFile);
    // console.log(imageUrl);

    try {
      const formData = new FormData();
      formData.append("source", foodData.imageFile);
      const response = await axios.post(
        `${PROXY_URL}/${API_URL}?key=${apiKey}&format=json`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = await response.data;
      console.log(data);
      const imageUrl = await response.data.image.url;
      console.log(imageUrl);

      setFoodData((food) => ({
        ...food,
        imageLink: imageUrl,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (foodData.imageLink != null) {
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
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid>
          <Typography variant="h5" color={grey[900]} sx={{ fontWeight: "bold", mt: 2 }}>
            Add Food Items
          </Typography>
        </Grid>
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
              helperText={priceError ? "Price must be a number with 2 d.p." : ""}
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <OutlinedInput
              size="small"
              type="file"
              sx={{ mr: 2, mb: 2, width: "44.5ch" }}
              onChange={(e) =>
                setFoodData((data) => ({ ...data, imageFile: e.target.files[0] }))
              }
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
