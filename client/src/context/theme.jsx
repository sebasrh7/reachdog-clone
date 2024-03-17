import { createContext, useState } from 'react';
import { useEffect } from 'react';

// Creamos el contexto
export const ThemeContext = createContext();

// Proveemos el contexto
export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem('theme');
        // Si el tema está guardado en el almacenamiento local, lo usamos sino usamos la preferencia del usuario 
        return localTheme ? localTheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }

        // Guardar el tema en el almacenamiento local
        localStorage.setItem('theme', theme);

    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(PrevTheme => PrevTheme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            handleChangeTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
}