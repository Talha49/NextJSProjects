"use client"
import React from "react";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import  Cart  from "../Cart/Cart";
import { useStateContext } from "@/context/StateContext";

const Navbar = () => {
  const { showcart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={""}>Techno Tonic</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <BsCart2 />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
    {showcart && <Cart />}
    </div>
  );
};

export default Navbar;
