import axios from "axios"

const baseURL = "upscaler4x.azurewebsites.net"

const publicClient = axios.create({ baseURL })

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