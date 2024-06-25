import { useCart } from "../context/CartContext";
import "./CartCard.css";

import React from 'react'

function CartCard({product}) {
  const { removeFromCart } = useCart();
  const {name, price, image} = product;

  return (
    <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">Rs.{price}</p>
        <button onClick={() => removeFromCart(product)}>Remove</button>
      </div>
  )
}

export default CartCard
 
