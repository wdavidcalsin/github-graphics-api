import React, { createContext, useContext, useState } from 'react';

interface ITheme {
    theme: boolean;
    setTheme: (theme: boolean) => void;
}

export const ThemeContext = createContext({} as ITheme);

const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState(true);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return { theme, setTheme };
};

export { ThemeProvider, useTheme };
