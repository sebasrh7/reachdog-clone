import { ThemeContext } from '../context/theme';
import { useContext } from 'react';

export function useTheme() {
    const { theme, handleChangeTheme } = useContext(ThemeContext);

    return { theme, handleChangeTheme };
}