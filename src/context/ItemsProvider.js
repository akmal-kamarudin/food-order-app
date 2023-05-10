import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemsContext from "./ItemsContext";
import { useNavigate } from "react-router-dom";

const ItemsProvider = ({ children }) => {
  const apiKey = process.env.REACT_APP_IMAGE_API_KEY;
  const API_URL = "https://api.imgbb.com/1/upload";

  const navigate = useNavigate();
  const [switchPage, setSwitchPage] = useState("/");
  const LOCAL_STORAGE_KEY = "Food-Items";
  const [itemsData, setItemsData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  // Upload Image
  const uploadImage = async (foodImage) => {
    try {
      const formData = new FormData();
      formData.append("image", foodImage);

      const response = await axios.post(`${API_URL}`, formData, {
        params: {
          key: apiKey,
          expiration: 2592000,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.data.url;
    } catch (error) {
      console.error(error);
    }
  };

  // Add Item to Food List
  const addNewItem = (item) => {
    const newItem = {
      id: crypto.randomUUID(),
      ...item,
    };

    setItemsData((prevItem) => [...prevItem, newItem]);
  };

  // Delete Item from Food List
  const removeItem = (id) => {
    const newFoodList = itemsData.filter((food) => {
      return food.id !== id;
    });

    setItemsData(newFoodList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(itemsData));
  }, [itemsData]);

  // Toggle Page Switch
  const togglePage = (page) => {
    if (page === "/" || page === null) {
      setSwitchPage("/admin");
      navigate("/admin");
    } else if (page === "/admin" || page === null) {
      setSwitchPage("/");
      navigate("/");
    }
  };

  useEffect(() => {
    if (switchPage === "/") {
      navigate("/");
    } else {
      navigate("/admin");
    }
  }, [switchPage, navigate]);

  const contextValue = {
    itemsData,
    switchPage,
    uploadImage,
    addNewItem,
    removeItem,
    togglePage,
  };

  return <ItemsContext.Provider value={contextValue}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
