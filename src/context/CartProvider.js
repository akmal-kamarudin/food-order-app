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

  const updateItemsTotal = (items) => {
    const updatedItems = items.map((food) => {
      const itemPrice = parseFloat(food.price);
      const itemMultiplier = food.multiplier;
      const itemTotalPrice = itemPrice * itemMultiplier;
      const roundedPrice = itemTotalPrice.toFixed(2);
      console.log(roundedPrice);

      return { ...food, total: roundedPrice };
    });

    setItems(updatedItems);
  };

  useEffect(() => {
    updateItemsTotal(items);
  }, [totalAmount]);

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
