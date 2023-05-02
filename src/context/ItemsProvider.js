import React, { useState, useEffect } from "react";
import ItemsContext from "./ItemsContext";
import { useNavigate } from "react-router-dom";

const ItemsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [switchPage, setSwitchPage] = useState("/");
  const LOCAL_STORAGE_KEY = "foodItems";
  const [itemsData, setItemsData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

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
    addNewItem,
    removeItem,
    updateItem,
    togglePage,
  };

  return <ItemsContext.Provider value={contextValue}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
