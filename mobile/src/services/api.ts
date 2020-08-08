import axios from 'axios';

const api = axios.create({
    //Utilizar o IP da maquina mostrado no expo e não localhost
    baseURL: 'http://192.168.1.193:3333',
});

export default api;