import axios from "axios"

const baseURL = "http://127.0.0.1:5000/api/v1"

const publicClient = axios.create({
  baseURL
})

publicClient.interceptors.request.use(async (config) => {
  config.headers['Content-Type'] = 'multipart/form-data'
  return config
})

publicClient.interceptors.response.use(async (response) => {
  if (response?.data) return response.data
  return response
}, err => {
  throw err.response
})

export default publicClient