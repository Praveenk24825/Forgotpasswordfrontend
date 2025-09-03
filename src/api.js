import axios from "axios";

const api = axios.create({
  baseURL: "https://backendproject-10.onrender.com", // your backend
});

export default api;
