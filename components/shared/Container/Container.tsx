import { useContext, useEffect } from "react";
import { ThemeContex } from "@/context/themeContext";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/hooks";
import { ProviderProps } from "@/types";
import background from "styles/themes/backgrounds.module.css";
import styles from "./Container.module.css";

export const Container = ({ children }: ProviderProps) => {
    const { setTheme } = useContext(ThemeContex);
    const theme = useTheme(usePathname());
    useEffect(() => {
        setTheme(theme);
    }, [theme, setTheme]);
    return (
        <div className={`${background[theme]} ${styles.container}`}>
            {children}
        </div>
    );
};
