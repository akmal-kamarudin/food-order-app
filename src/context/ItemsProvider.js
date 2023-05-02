import React, { useState, useEffect } from "react";
import ItemsContext from "./ItemsContext";
import { useNavigate } from "react-router-dom";

const ItemsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [switchPage, setSwitchPage] = useState(null);
  const LOCAL_STORAGE_KEY = "foodItems";
  const [itemsData, setItemsData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addNewItem = (item) => {
    console.log("adding item..");

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
