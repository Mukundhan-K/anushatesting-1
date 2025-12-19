import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
,
    // baseURL: "http://127.0.0.1:5000",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Request Interceptor — runs BEFORE every request
Api.interceptors.request.use((config) => {
  // console.log("inside index api token");
  
  const rawToken  = localStorage.getItem("authToken");

  let token = null;
  if (rawToken) {
    try {
      token = JSON.parse(rawToken);
    } catch {
      token = rawToken;
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

export default Api;