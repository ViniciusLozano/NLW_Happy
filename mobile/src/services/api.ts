import axios from 'axios'

const api = axios.create({
    // Pra rodar no celular pegar o ip quando rodar.
    baseURL: 'http://192.170.1.109:3333',
})

export default api