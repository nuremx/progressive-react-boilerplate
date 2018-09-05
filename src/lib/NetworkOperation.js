import axios from 'axios'

const baseUrl = 'http://localhost:8080/v1'
let token = null

function getToken() {
  token = localStorage.getItem('token')
  return token
}

// Request interceptors
axios.interceptors.request.use(
  (config) => {
    // Add token
    config.headers.Authorization = `Bearer ${token || getToken()}`
    // Do something before request is sent
    return config
  },
  (error) => Promise.reject(error)
)

class NetworkOperation {
  static login(email, password) {
    return axios.post(`${baseUrl}/authenticate`, { email, password })
  }
}

export default NetworkOperation
