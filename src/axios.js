import axios from 'axios';

/*
Configuración de Axios para 
manejar las solicitudes HTTP con autenticación mediante tokens.
*/

const API = axios.create({
  baseURL: 'http://localhost:3000',  // Configura la URL base para Axios
});

API.interceptors.request.use((config) => {  // Interceptor para agregar el token de autenticación a cada solicitud
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;  // Agrega el token al encabezado Authorization si existe
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;  // Exporta la instancia configurada de Axios
