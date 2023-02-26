"use client";
import { createContext, SetStateAction, useContext, useState } from "react";

type ThemeKey = "dark" | "light";

interface ContextProps {
    theme: ThemeKey;
    setTheme: React.Dispatch<SetStateAction<ThemeKey>>;
}

type ProviderProps = {
    children: React.ReactNode;
};
export const ThemeContex = createContext<ContextProps>({
    theme: "dark",
    setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: ProviderProps) => {
    const [theme, setTheme] = useState<ThemeKey>("light");

    return (
        <ThemeContex.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContex.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContex);
