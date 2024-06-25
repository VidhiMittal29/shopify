import { Link, NavLink } from "react-router-dom"; 
import logo from "../assets/logo.png"
import { useCart } from "../context/CartContext";
import "./Header.css";

import React from 'react'

function Header() {
  const { cartList } = useCart();

  return (
    <div>
      <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Shopmate Logo" />
        <span>Shopify</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
    </div>
  )
}

export default Header
  
