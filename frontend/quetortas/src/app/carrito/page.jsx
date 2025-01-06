"use client"
import { useSelector } from 'react-redux';

export default function Home() {
  const cartItems = useSelector((state) => state.cart.items); // Leer los items del carrito

  console.log("Cart Items:", cartItems); // Añadir log para verificar los items del carrito

  return (
    <div>
      <h1>Carrito:</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <p key={item._id}>{item.title} - Cantidad: {item.quantity}</p>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
}