import React from "react";

export default function ProductCard({product}) {
  return (
    <div className="card py-16">
      <div className="product-card drop-shadow-2xl">

        <div className="product-card-image">
          <img
            className=""
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/products/${product.imageURL}`}
            alt={product.title}
          />
        </div>

        <div className="product-card-info text-black flex flex-col py-3 items-center h-56 justify-start w-full">
          <h2 className="text-3xl font-poppins text-center">{product.title}</h2>
          <span className="text-2xl font-lunasima py-3 text-center">
                ${product.price}
          </span>
          <button className="product-card-button font-poppins  text-black text-xl">Ver más</button>
        </div>

      </div>
    </div>
  );
}
