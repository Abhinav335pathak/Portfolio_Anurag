import { useState, useEffect } from "react";
import { getProducts } from "../services/api.js";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
        console.log("Fetched products:", response.data);
      } catch (err) {
        let errorMessage = "Failed to fetch products";
        
        if (err.response?.status === 503) {
          errorMessage = "Server is temporarily unavailable. Please try again in a moment.";
        } else if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        } else if (err.message) {
          errorMessage = err.message;
        }
        
        setError(errorMessage);
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useGetProducts;