import React, { useState } from "react";
import axios from "axios";
import ItemsContext from "./ItemsContext";
import { useNavigate } from "react-router-dom";

const ItemsProvider = ({ children }) => {
  const navigate = useNavigate();
  const API_URL = "https://freeimage.host/api/1/upload";
  const apiKey = process.env.REACT_APP_IMAGE_API_KEY;
  const [itemsData, setItemsData] = useState([]);
  const [switchPage, setSwitchPage] = useState(null);

  const addNewItem = (item) => {
    setItemsData((prevData) => [...prevData, item]);
  };

  const removeItem = (id) => {
    setItemsData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const updateItem = (id, updatedItem) => {
    setItemsData((prevData) =>
      prevData.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const togglePage = (page) => {
    console.log("page:", page);
    console.log(switchPage);

    if (page === "/admin" || page === null) {
      setSwitchPage("/");
      navigate("/admin");
    } else if (page === "/") {
      setSwitchPage("/admin");
      navigate("/");
    }
  };

  const uploadImage = async (imageFile) => {
    console.log(imageFile);

    try {
      const formData = new FormData();
      formData.append("imageFile", imageFile);
      const response = await axios.post(
        `https://cors-anywhere.herokuapp.com/http://freeimage.host/api/1/upload/?key=${apiKey}&format=json`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      console.log(data);
      // if (response.data.success) {
      //   return response.data.image.url;
      // } else {
      //   throw new Error(response.data.error.message);
      // }
    } catch (error) {
      console.error(error);
      // return null;
    }
  };

  const contextValue = {
    itemsData,
    switchPage,
    addNewItem,
    removeItem,
    updateItem,
    togglePage,
    uploadImage,
  };

  return <ItemsContext.Provider value={contextValue}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
