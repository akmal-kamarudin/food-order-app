import React, { useState } from "react";
import ItemsContext from "./ItemsContext";
import { useNavigate } from "react-router-dom";

const ItemsProvider = ({ children }) => {
  const navigate = useNavigate();
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

  const contextValue = {
    itemsData,
    addNewItem,
    removeItem,
    updateItem,
    switchPage,
    togglePage,
  };

  return <ItemsContext.Provider value={contextValue}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
