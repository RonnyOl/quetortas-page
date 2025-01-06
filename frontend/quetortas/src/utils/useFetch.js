/**
 * The `useFetch` custom hook in JavaScript fetches data from multiple URLs asynchronously and handles
 * loading and error states.
 * @param urls - The `urls` parameter in the `useFetch` custom hook is an array of URLs from which data
 * will be fetched asynchronously. The hook will make requests to each URL in the array using the
 * `fetchData` function and update the state with the results.
 * @returns The `useFetch` custom hook returns an object with three properties: `data`, `loading`, and
 * `error`. These properties are used to manage the fetched data, loading state, and any errors that
 * may occur during the data fetching process.
 */
// hooks/useFetch.js
import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetchData.js";

// Hook personalizado para obtener datos de múltiples URLs
export const useFetch = (urls) => {
  // Estado para almacenar los datos obtenidos
  const [data, setData] = useState([]);
  // Estado para indicar el estado de carga
  const [loading, setLoading] = useState(true);
  // Estado para almacenar cualquier error que ocurra durante la obtención de datos
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener datos de todas las URLs
    const fetchDataFromUrls = async () => {
      try {
        // Obtener datos de todas las URLs y almacenar los resultados
        const results = await Promise.all(urls.map((url) => fetchData(url)));
        
        setData(results);
      } catch (err) {
        // Si ocurre un error, establecer el estado de error y registrar el error
        setError(err.message);
        console.error(err);
      } finally {
        // Establecer el estado de carga a falso después de completar la obtención de datos
        setLoading(false);
        
      }
    };

    // Llamar a la función para obtener datos
    fetchDataFromUrls();
  }, [urls]); // Array de dependencias para volver a ejecutar el efecto cuando cambien las URLs

  // Devolver los datos obtenidos, el estado de carga y cualquier error
  return { data, loading, error };
};