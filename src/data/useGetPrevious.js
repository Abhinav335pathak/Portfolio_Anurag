import { useState, useEffect } from "react";
import {getApps } from "../services/api.js";

export const useGetPreviousWorks = () => {
  const [previousWorks, setPreviousWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPreviousWorks = async () => {
      try {
        const response = await getApps();
        setPreviousWorks(response.data);
        console.log("Fetched previous works:", response.data);
      } catch (err) {
        let errorMessage = "Failed to fetch previous works";
        
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

    fetchPreviousWorks();
  }, []);

  return { previousWorks, loading, error };
};

export default useGetPreviousWorks;