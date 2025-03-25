import axios from "axios";

const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      // Handle request error
      return Promise.reject(error);
    }
  );
};

export default setupAxiosInterceptors;
