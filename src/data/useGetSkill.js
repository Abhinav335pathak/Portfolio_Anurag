import { useState, useEffect } from "react";
import { getSkill } from "../services/api.js";

export const useGetSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getSkill();
        setSkills(response.data);
      } catch (err) {
        let errorMessage = "Failed to fetch skills";
        
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

    fetchSkills();
  }, []);

  return { skills, loading, error };
};

export default useGetSkills;