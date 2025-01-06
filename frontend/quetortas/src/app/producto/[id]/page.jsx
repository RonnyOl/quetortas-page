"use client"
import { fetchData } from '@/utils/fetchData';
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slice.js';

export default function Page() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const chargeProduct = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/tortas/${id}`;
        const torta = await fetchData([url]);
        setProduct(torta);
        console.log("Fetched Product:", torta); // Añadir log para verificar el producto obtenido
      } catch (err) {
        console.error(err);
        setError("Error fetching product: " + err.message);
      }
    };

    if (id) chargeProduct(); // Ejecutar solo si `id` está disponible
  }, [id]); // Dependencia: solo ejecuta si `id` cambia

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
    
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product Page: {id}</h1>
      {product ? (
        <div>
          <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/products/${product.imageURL}`}></img>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button onClick={handleAddToCart} className='w-36 h-16 bg-slate-400'>añadir al carrito </button>
          {/* Renderiza más detalles del producto aquí */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
