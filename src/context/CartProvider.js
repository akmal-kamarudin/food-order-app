import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const LOCAL_STORAGE_KEY2 = "Cart-Items";
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2)) ?? []
  );

  const LOCAL_STORAGE_KEY3 = "Total-Amount";
  const [totalAmount, setTotalAmount] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY3)) ?? 0
  );

  // Add Item to Cart List
  const addItem = (food) => {
    const itemIndex = items.findIndex((item) => item.id === food.id);

    if (itemIndex >= 0) {
      const food = [...items];
      food[itemIndex] = {
        ...food[itemIndex],
        multiplier: food[itemIndex].multiplier + 1,
        total: updateItemsTotal(food[itemIndex], food[itemIndex].multiplier + 1),
      };

      setItems(food);
    } else {
      const newItem = {
        ...food,
        multiplier: 1,
        total: food.price,
      };

      setItems((items) => [...items, newItem]);
    }
  };

  // Remove Item from Cart List
  const removeItem = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    const existingItem = items.find((item) => item.id === id);

    if (itemIndex >= 0 && existingItem.multiplier > 1) {
      const food = [...items];
      food[itemIndex] = {
        ...food[itemIndex],
        multiplier: food[itemIndex].multiplier - 1,
        total: updateItemsTotal(food[itemIndex], food[itemIndex].multiplier - 1),
      };
      setItems(food);
    } else {
      const newCartList = items.filter((food) => {
        return food.id !== id;
      });
      setItems(newCartList);
    }
  };

  // Calculate each Item's price
  const updateItemsTotal = (food, multiplier) => {
    const itemPrice = parseFloat(food.price);
    const itemMultiplier = multiplier;
    const itemTotalPrice = itemPrice * itemMultiplier;
    const roundedPrice = itemTotalPrice.toFixed(2);

    return roundedPrice;
  };

  // Calculate Total Price
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
    setTotalAmount(roundedTotal);
  }, [items]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(items));
    localStorage.setItem(LOCAL_STORAGE_KEY3, JSON.stringify(totalAmount));
  }, [items, totalAmount]);

  const contextValue = {
    items,
    totalAmount,
    addItem,
    removeItem,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
