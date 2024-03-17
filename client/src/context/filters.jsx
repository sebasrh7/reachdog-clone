import { createContext, useState } from 'react';

// Creamos el contexto
export const FiltersContext = createContext();

// Proveemos el contexto
export function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({
        // empieza con el filtro de categoría en "all-products" o el valor guardado en el localStorage
        category: localStorage.getItem('category') || "all-products",
    });

    // Guardar el filtro en el localStorage
    localStorage.setItem('category', filters.category);

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    );
}
