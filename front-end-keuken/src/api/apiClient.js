import axios from 'axios';
// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: 'https://localhost:7110/Api/', // Replace with your C# API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Optional: Timeout after 10 seconds
});

// Optional: Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Example: Attach an Authorization token from localStorage (if needed)
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Process and return the response
    return response;
  },
  (error) => {
    console.error('Response error:', error);

    // Handle specific HTTP errors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized - maybe redirect to login?');
          break;
        case 403:
          console.error('Forbidden - you do not have access to this resource.');
          break;
        case 500:
          console.error('Server error - try again later.');
          break;
        default:
          console.error('Unhandled error:', error.response.status);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
