import { FiltersContext } from '../context/filters';
import { useContext } from 'react';

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext);

    const filterProducts = (products) => {
        return products.filter((product) => {
            return product.category === filters.category;
        });
    };

    return { setFilters, filterProducts, filters};
}