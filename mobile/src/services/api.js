import axios from 'axios';

const api = axios.create({
  //Lembrar de trocar para o ip correto
  baseURL: 'http://192.168.1.6:3333'
});

export default api;