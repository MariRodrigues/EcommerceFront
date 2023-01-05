import axios from 'axios';

const ecommerce = axios.create({
    baseURL: 'https://localhost:5001/'
});

export default ecommerce;