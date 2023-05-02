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
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    price: "",
    imageFile: null,
    imageLink: null,
  });

  const handleImageChange = (e) => {
    setFoodData((inputs) => ({ ...inputs, imageFile: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    console.log("uploading...");
    e.preventDefault();
    console.log(foodData);
    console.log(foodData.imageFile);
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
  }, [foodData]);

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
        <form onSubmit={handleSubmit}>
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
              value={foodData.name}
              onChange={(e) => setFoodData((data) => ({ ...data, name: e.target.value }))}
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <TextField
              id="outlined-basic"
              label="Description *"
              variant="outlined"
              type="text"
              value={foodData.description}
              onChange={(e) =>
                setFoodData((data) => ({ ...data, description: e.target.value }))
              }
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <TextField
              id="outlined-basic"
              label="Price *"
              variant="outlined"
              type="number"
              step="0.01"
              value={foodData.price}
              onChange={(e) =>
                setFoodData((data) => ({ ...data, price: e.target.value }))
              }
              inputProps={{
                pattern: "^\\d+(\\.\\d{1,2})?$",
              }}
              sx={{ mr: 2, mb: 2, width: "46ch" }}
            />

            <OutlinedInput
              size="small"
              type="file"
              sx={{ mr: 2, mb: 2, width: "44.5ch" }}
              onChange={handleImageChange}
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
