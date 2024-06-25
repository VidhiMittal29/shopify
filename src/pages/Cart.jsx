import React from 'react';
import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import CartCard from "../components/CartCard";

function Cart() {
  const { total, cartList } = useCart();
  useTitle("Cart");

  return (
    <div>
      <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length}  </h1>
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
        <h2>Total : Rs. {total}</h2>
      </section>
    </main>
    </div>
  )
}

export default Cart

