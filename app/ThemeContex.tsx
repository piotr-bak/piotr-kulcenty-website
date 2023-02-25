import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import theming from "@/data/config/theming.json";

export const ThemeContext = React.createContext<"light" | "dark">("dark");

export const themes = JSON.parse(JSON.stringify(theming));
export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = useRouter();
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (themes.light.includes(pathname)) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }, [pathname]);
};
