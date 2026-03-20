import axios from "axios";

// "https://anurag-portfolio-ouoc.onrender.com" ||
const API_BASE ="https://anurag-portfolio-ouoc.onrender.com"; // Ensure this is the correct backend URL
// const API_BASE ="http://localhost:5000"; // Ensure this is the correct backend URL 

const api = axios.create({
  baseURL: API_BASE, // /api removed from here
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const getProducts = () => 
  api.get('/api/projects'); 


export const getReview = () => {
  return api.get("/api/reviews");
};
export const getSkill =()=>{
  return api.get("/api/skills");
}

export const getApps = () => {
  return api.get("/api/apps");
}


export default api;
