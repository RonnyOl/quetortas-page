"use client";

import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "@/components/product-card";
import { fetchData } from "@/utils/fetchData";

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [totalPages, setTotalPages] = useState(1); // Total de páginas necesario para calcular la paginación de los botones de página
  const [currentPage, setCurrentPage] = useState(1); // Página actual

  /*Función que sirve para devolver el url según los filtros que se requieran o las querys que se tengan*/
  const buildFilterUrl = useCallback((filters) => {
    console.log(filters);
    const query = new URLSearchParams(filters);
    return `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/tortas/filter?${query.toString()}`;
  }, []);

  /* Únicamente fetchea los datos usando la función buildFilterUrl() */
  const fetchFilteredData = async (filters) => {
    try {
      const url = buildFilterUrl(filters);
      console.log(url);
      const { tortas, totalPages, currentPage } = await fetchData([url]);
      setTotalPages(totalPages);
      setCurrentPage(currentPage);
      setProducts(tortas);
    } catch (err) {
      console.log(err);
      setError("Error fetching products.s", err.message);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const filters = Object.fromEntries(formData.entries()); // Convierte todos los inputs en un objeto clave-valor
    // Limpia valores vacíos
    Object.keys(filters).forEach((key) => {
      if (!filters[key]) delete filters[key];
    });

    // Actualiza la URL del navegador
    const query = new URLSearchParams(filters).toString();
    window.history.pushState({}, "", `?${query}`);

    fetchFilteredData(filters);
  };

  useEffect(() => {
    const searchParams = Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );
    fetchFilteredData(searchParams);
  }, [buildFilterUrl]); // acciona por primera vez y luego cuando cambia la función buildFilterUrl
  // vuelve a ejecutar el efecto generando ( y al buildfilterurl ser useCallback no se vuelve a ejecutar si es el mismo)

  const handlePageChange = (page) => {
    // Obtener los parámetros de búsqueda de la URL actual y convertirlos en un objeto
    const searchParams = Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );

    // Llamar a fetchFilteredData con los parámetros de búsqueda y la nueva página
    fetchFilteredData({ ...searchParams, page });

    // Convertir los parámetros de búsqueda de nuevo a una cadena de consulta
    const queryString = new URLSearchParams({
      ...searchParams,
      page,
    }).toString();

    // Actualizar la URL del navegador con la nueva cadena de consulta
    window.history.pushState({}, "", `?${queryString}`);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="catalog-container flex">
          <div className="catalog-filter-container">
            <h2 className="catalog-filter-title font-poppins text-4xl mt-6">
              FILTROS
            </h2>
            <div className="catalog-filter-price">
              <h3 className="catalog-filter-label text-2xl text-center py-6">
                Precio
              </h3>
              <form
                onSubmit={submitHandler}
                className="flex gap-6 flex-col items-center"
              >
                {/* Filtros de precio */}
                <div className="flex gap-6">
                  <input
                    type="number"
                    name="min"
                    placeholder="Desde"
                    className="catalog-filter-input font-poppins"
                  />
                  <input
                    type="number"
                    name="max"
                    placeholder="Hasta"
                    className="catalog-filter-input font-poppins"
                  />
                </div>

                <button className="catalogo-filter-button">FILTRAR</button>
              </form>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="products-container">
              {products.length != 0 ? (
                products.map((product) => (
                  <>
                    <ProductCard key={product._id} product={product} />
                  </>
                ))
              ) : (
                <p>No products found</p>
              )}
            </div>
            <div>
            {Array.from({ length: totalPages }).map((_, index) => {
              let page = index + 1;
              return (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  className={`pagination-button px-4 py-2 rounded-md ${
                    page === currentPage
                      ? "bg-[#E5CBCB] text-black"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              );
            })
            }
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
