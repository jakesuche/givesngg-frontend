import axios from 'axios'

const axiosInstance = axios.create({
    timeout:3000,
    'Cache-Control': "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
    'Pragma': "no-cache",
    headers:{'authorization':`Bearer ${localStorage.getItem('vue-meet-token') || ''}`}
})

export default axiosInstance