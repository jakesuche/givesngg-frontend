import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://givesng-staging.herokuapp.com',
    timeout:3000,
    'Cache-Control': "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
    'Pragma': "no-cache",
    headers:{'authorization':`Bearer ${localStorage.getItem('auth-token') || ''}`}
})

export default axiosInstance