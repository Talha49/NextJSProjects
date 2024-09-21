"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showcart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const incqty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decqty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  const onAdd = (product, quantity) => {
    const existingProduct = cartItems.find((item) => item._id === product._id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    toast.success(`${quantity} ${product.name} added to the cart.`);
  };

  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id);

    if (value === "inc") {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec" && foundProduct.quantity > 1) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    }
  };

  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);

    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item._id !== product._id)
    );

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
  };
  return (
    <Context.Provider
      value={{
        showcart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incqty,
        decqty,
        onAdd,
        toggleCartItemQuantity,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
