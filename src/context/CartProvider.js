import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItem = (food) => {
    const existingItemIndex = items.findIndex((item) => item.id === food.id);

    if (existingItemIndex >= 0) {
      const updatedCart = [...items];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        multiplier: updatedCart[existingItemIndex].multiplier + 1,
      };
      setItems(updatedCart);
      console.log(updatedCart);
    } else {
      const newItem = {
        multiplier: 1,
        ...food,
      };
      console.log(newItem);

      setItems((items) => [...items, newItem]);
    }
  };

  const removeItem = (id) => {
    const existingItemIndex = items.findIndex((item) => item.id === id);
    const existingItem = items.find((item) => item.id === id);

    if (existingItemIndex >= 0 && existingItem.multiplier > 1) {
      const updatedCart = [...items];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        multiplier: updatedCart[existingItemIndex].multiplier - 1,
      };
      setItems(updatedCart);
      console.log(updatedCart);
    } else {
      const newCartList = items.filter((food) => {
        return food.id !== id;
      });
      setItems(newCartList);
    }
  };

  useEffect(() => {
    let calculatedTotal = 0;

    for (let i = 0; i < items.length; i++) {
      const food = items[i];
      const itemPrice = parseFloat(food.price);
      const itemMultiplier = food.multiplier;
      const itemTotalPrice = itemPrice * itemMultiplier;
      calculatedTotal += itemTotalPrice;
    }

    const roundedTotal = calculatedTotal.toFixed(2);
    console.log(roundedTotal);
    setTotalAmount(roundedTotal);
  }, [items]);

  const contextValue = {
    items,
    totalAmount,
    addItem,
    removeItem,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
