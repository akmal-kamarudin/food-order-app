import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemsContext from "./ItemsContext";
import { useNavigate } from "react-router-dom";

const ItemsProvider = ({ children }) => {
  // const API_URL = "https://freeimage.host/api/1/upload";
  // const PROXY_URL = "https://cors-anywhere.herokuapp.com";
  const apiKey = process.env.REACT_APP_IMAGE_API_KEY;
  const API_URL = "https://api.imgbb.com/1/upload";

  const navigate = useNavigate();
  const [switchPage, setSwitchPage] = useState("/");
  const LOCAL_STORAGE_KEY = "Food-Items";
  const [itemsData, setItemsData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  // const uploadImage = async (foodImage) => {
  //   console.log(foodImage);
  //   try {
  //     const formData = new FormData();
  //     formData.append("image", foodImage);

  //     const response = await axios.post(`${API_URL}`, formData, {
  //       params: {
  //         key: apiKey,
  //         expiration: 2592000,
  //       },
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     return response.data.data.url;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const uploadImage = async (foodImage) => {
    console.log(foodImage);
    try {
      const formData = new FormData();
      formData.append("image", foodImage);
      const response = await axios.post(
        `${API_URL}?expiration=2592000&key=${apiKey}`,
        // `${PROXY_URL}/${API_URL}?key=${apiKey}&format=json`,
        // `${API_URL}?key=${apiKey}&format=json&action=upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return await response.data.data.url;
      // return await response.data.image.url;
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
    togglePage,
  };

  return <ItemsContext.Provider value={contextValue}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
