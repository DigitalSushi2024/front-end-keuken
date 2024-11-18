import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-base-url.com/api', // Replace with your API URL
  timeout: 10000, // Optional: Timeout for requests
});

export default axiosInstance;