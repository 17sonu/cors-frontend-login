// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-backend-login.vercel.app/api', // Use the server's base URL
});

export default api;