import axios from 'axios'

const axios_wc = axios.create({
    withCredentials: true    
})

export default axios_wc