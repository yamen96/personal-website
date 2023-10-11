import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);

    return [theme, themeToggler]
};
