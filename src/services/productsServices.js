import axios from 'axios';

const getAllProducts = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products?limit=194');
        return response.data;
    } catch (error) {
        console.error('Error fetching products', error);
    }
}

export default getAllProducts;