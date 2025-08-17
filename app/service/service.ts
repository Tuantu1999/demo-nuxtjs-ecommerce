// services/ApiClient.ts
import axios, { AxiosError, type AxiosResponse } from 'axios';

const ApiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000
});

// ==================== REQUEST INTERCEPTOR ====================
ApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log('➡️ Request:', config.method?.toUpperCase(), config.url, config);

    return config;
  },
  (error: AxiosError) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
  }
);

// ==================== RESPONSE INTERCEPTOR ====================
ApiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('⬅️ Response:', response.status, response.config.url, response);

    return response;
  },
  async (error: AxiosError) => {
    if (error.response) {
      console.error('❌ Response error:', error.response.status, error.response.data);

      if (error.response.status === 401) {
        try {
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            // Gọi API refresh token
            const res = await axios.post('http://localhost:3000/api/auth/refresh', {
              refreshToken
            });

            const newToken = (res.data as { token: string }).token;
            localStorage.setItem('token', newToken);

            // Gửi lại request cũ với token mới
            if (error.config) {
              error.config.headers.Authorization = `Bearer ${newToken}`;
              return ApiClient.request(error.config);
            }
          }
        } catch (refreshErr) {
          console.error('❌ Refresh token failed:', refreshErr);
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
        }
      }
    } else {
      console.error('❌ Network/Server error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default ApiClient;
