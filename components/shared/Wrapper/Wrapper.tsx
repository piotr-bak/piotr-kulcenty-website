import { useEffect } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/hooks";
import { ProviderProps } from "@/types";
import background from "styles/themes/backgrounds.module.css";
import styles from "./Wrapper.module.css";

export const Wrapper = ({ children }: ProviderProps) => {
    const { setTheme } = useThemeContext();
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