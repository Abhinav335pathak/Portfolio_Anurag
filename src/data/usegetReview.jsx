import { useState, useEffect } from "react";
import { getReview } from "../services/api.js";

export const useGetReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReview();
        setReviews(response.data);
      } catch (err) {
        let errorMessage = "Failed to fetch reviews";

        if (err.response?.status === 503) {
          errorMessage =
            "Server is temporarily unavailable. Please try again later.";
        } else if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        } else if (err.message) {
          errorMessage = err.message;
        }

        setError(errorMessage);
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
};

export default useGetReview;