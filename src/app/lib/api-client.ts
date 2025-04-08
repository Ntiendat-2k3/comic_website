import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Xử lý interceptor cho request
apiClient.interceptors.request.use(
  (config) => {
    // Thêm xử lý token tại đây nếu cần
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Xử lý interceptor cho response
apiClient.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.data.data.items);
    return response.data;
  },
  // (error) => {
  //   const { response } = error;
  //   if (response?.status === 401) {
  //     // Xử lý logout khi hết hạn token
  //   }
  //   return Promise.reject(error);
  // }
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
