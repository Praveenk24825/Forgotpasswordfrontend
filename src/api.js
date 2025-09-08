import axios from "axios";

const api = axios.create({
  baseURL: "https://backendproject-10.onrender.com/api/auth", // change if needed
});

export default api;
