import axios from 'axios';

const ecommerce = axios.create({
    baseURL: 'https://ecommerceapi1912.azurewebsites.net/'
});

export default ecommerce;