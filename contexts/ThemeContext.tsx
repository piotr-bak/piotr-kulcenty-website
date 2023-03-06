"use client";
import { createContext, useContext, useState } from "react";
import { ContextProps } from "@/types/interfaces";
import { ProviderProps, ThemeKey } from "@/types";

export const ThemeContex = createContext<ContextProps>({
    theme: "dark",
    setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: ProviderProps) => {
    const [theme, setTheme] = useState<ThemeKey>("dark");

    return (
        <ThemeContex.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContex.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContex);
