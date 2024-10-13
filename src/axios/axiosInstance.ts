import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',  // Replace with your API URL
  baseURL:'http://localhost:8000/',  // Replace with your API URL
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors to manage requests/responses
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token or other custom headers here
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    // Handle response errors here
    if (error?.response?.status === 401) {
      // Handle unauthorized access, maybe redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
