import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// http://localhost:5000/api;

instance.interceptors.request.use((config) => {
  config.headers.Autorization = window.localStorage.getItem('token');

  return config;
});

export default instance;
