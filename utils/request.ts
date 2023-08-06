import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // API的基础URL
  timeout: 10000, // 请求超时时间
  withCredentials: true, // 跨域请求时是否需要携带cookie
  headers: {
    'Content-Type': 'application/json', // 请求头的Content-Type
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token'); // 获取本地存储的token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 在请求头中添加token
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error('request error:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    const { data, status } = response;
    if (status === 200) {
      return data;
    } else {
      console.error(`response error: ${status}`);
      return Promise.reject(response);
    }
  },
  (error) => {
    // 对响应错误做些什么
    console.error('response error:', error);
    return Promise.reject(error);
  }
);

export default instance;
