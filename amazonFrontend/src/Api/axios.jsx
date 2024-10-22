import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-8ad58/us-central1/api",
  //Amazon-API Server
  // baseURL="http://localhost:5173"
  //deployed version of amazon server on render.com
  baseURL:"https://amazon-fullstack-clone.onrender.com"
});

export { axiosInstance };