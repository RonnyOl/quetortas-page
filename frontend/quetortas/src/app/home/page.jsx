"use client";
import React, { use, useEffect, useState } from "react";
import FeaturesCard from "./components/features-card";
import { FaInstagram } from "react-icons/fa";
import ProductCard from "@/components/product-card";
import { useFetch } from "@/utils/useFetch.js";

export default function page() {
  const { data, loading, error } = useFetch([
    `${process.env.NEXT_PUBLIC_BASE_URL}/tortas/filter?featured=true`,
    `${process.env.NEXT_PUBLIC_BASE_URL}/tortas/filter`,
  ]);
 
  const features = data[0]?.tortas || [];
  const previews = data[1]?.tortas|| [];
 
  return (
    <div className="home-container">
      <h1 className="text-6xl text-black font-love text-center py-16">
        Productos nuevos
      </h1>

      <div className="features-container">
        {loading ? (
          <p className="text-3xl text-black">Cargando...</p>
        ) : (
          features.map((product) => (
            <FeaturesCard key={product._id} product={product} />
          ))
        )}
      </div>

      <div class="instagram-section text-black">
        <div className="line"></div>
        <div className="instagram-text font-lunasima flex items-center justify-start gap-2">
          <FaInstagram className="text-4xl text-black w-16 h-16" />
          {/* Ícono de Instagram */}
          <div className="flex flex-col items-start">
            <p className="text-3xl">SÍGUENOS EN INSTAGRAM</p>
            <p>
              <strong className="text-3xl">@quetortas.arg</strong>
            </p>
          </div>
        </div>

        <div className="line"></div>
      </div>

      <div className="preview-container">
        {loading ? (
          <p className="text-3xl text-black">Cargando...</p>
        ) : (
          previews.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>

    </div>
  );
}
