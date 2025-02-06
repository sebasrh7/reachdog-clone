import React, { useEffect, useState } from 'react';
import getAllProducts from '../services/productsServices';
import { useFilters } from '../hooks/useFilters';
import { FaMobile, FaLaptop, FaSpa, FaHome, FaFlask, FaList } from 'react-icons/fa';

const useData = () => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const { filterProducts, filters } = useFilters();

    // useEffect para obtener los productos de la API
    useEffect(() => {
        getAllProducts().then((data) => {
            console.log(data.products.filter(product => product.category === 'skin-care'));
            setProducts(data.products);
            setIsLoading(false);
        });
    }, []);

    const filteredProducts = filterProducts(products); // Filtrar productos con los filtros seleccionados por el usuario  
    //const category = filters.category; // Obtener la categoría seleccionada por el usuario
    const data = generateTabsData(filteredProducts, products); // Generar los datos para las pestañas

    return {data, isLoading};
}

const generateTabsData = (filteredProducts, products) => {
    return [
        {
            label: 'All Products',
            icon: <FaList />,
            value: 'all-products',
            content: products.filter(product => ['smartphones', 'laptops', 'skin-care', 'home-decoration', 'fragrances'].includes(product.category))
        },
        {
            label: 'Smartphones',
            icon: <FaMobile />,
            value: 'smartphones',
            content: filteredProducts.filter(product => product.category === 'smartphones')
        },
        {
            label: 'Laptops',
            icon: <FaLaptop />,
            value: 'laptops',
            content: filteredProducts.filter(product => product.category === 'laptops')
        },
        {
            label: 'Skincare',
            icon: <FaSpa />,
            value: 'skin-care',
            content: filteredProducts.filter(product => product.category === 'skin-care') // esto 
        },
        {
            label: 'Home Decoration',
            icon: <FaHome />,
            value: 'home-decoration',
            content: filteredProducts.filter(product => product.category === 'home-decoration')
        },
        {
            label: 'Fragrances',
            icon: <FaFlask />,
            value: 'fragrances',
            content: filteredProducts.filter(product => product.category === 'fragrances')
        }
    ]
}

export default useData;