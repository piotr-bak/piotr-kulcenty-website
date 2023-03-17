"use client";
import { useEffect } from "react";
import { useThemeContext } from "@/contexts/ThemeContext";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/hooks";
import { ProviderProps } from "@/types";
import background from "styles/themes/backgrounds.module.css";
import typography from "styles/themes/typography.module.css";
import scrollbar from "styles/themes/scrollbar.module.css";
import styles from "./Wrapper.module.css";

export const Wrapper = ({ children }: ProviderProps) => {
    const { setTheme } = useThemeContext();
    const theme = useTheme(usePathname());

    useEffect(() => {
        document.body.classList.add(`${scrollbar[theme]}`);
        return () => {
            document.body.classList.remove(`${scrollbar[theme]}`);
        };
    }, [theme]);
    useEffect(() => {
        setTheme(theme);
    }, [theme, setTheme]);

    return (
        <div
            className={`${background[theme]} ${typography[theme]} ${styles.wrapper}`}>
            {children}
        </div>
    );
};
