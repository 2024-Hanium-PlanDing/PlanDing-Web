import axios from 'axios'
export const BASE_URL = import.meta.env.VITE_SERVER_URL

const basicApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

export default basicApi
