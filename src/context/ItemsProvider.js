import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemsContext from "./ItemsContext";
import { useNavigate } from "react-router-dom";

const ItemsProvider = ({ children }) => {
  const API_URL = "https://freeimage.host/api/1/upload";
  const PROXY_URL = "https://cors-anywhere.herokuapp.com";
  const apiKey = process.env.REACT_APP_IMAGE_API_KEY;

  const navigate = useNavigate();
  const [switchPage, setSwitchPage] = useState("/");
  const LOCAL_STORAGE_KEY = "foodItems";
  const [itemsData, setItemsData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const uploadImage = async (foodImage) => {
    try {
      const formData = new FormData();
      formData.append("source", foodImage);
      const response = await axios.post(
        `${PROXY_URL}/${API_URL}?key=${apiKey}&format=json`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // const data = await response.data;
      // console.log(data);
      return await response.data.image.url;
    } catch (error) {
      console.error(error);
    }
  };

  const addNewItem = (item) => {
    const newItem = {
      id: crypto.randomUUID(),
      ...item,
    };
    console.log(newItem);

    setItemsData((prevItem) => [...prevItem, newItem]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(itemsData));
  }, [itemsData]);

  const removeItem = (id) => {
    const newFoodList = itemsData.filter((food) => {
      return food.id !== id;
    });

    setItemsData(newFoodList);
  };

  const updateItem = (id, updatedItem) => {
    setItemsData((prevData) =>
      prevData.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const togglePage = (page) => {
    console.log("page:", page);
    console.log(switchPage);

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
  }, [switchPage]);

  const contextValue = {
    itemsData,
    switchPage,
    uploadImage,
    addNewItem,
    removeItem,
    updateItem,
    togglePage,
  };

  return <ItemsContext.Provider value={contextValue}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
