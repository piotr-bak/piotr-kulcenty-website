import React from "react";
import { PanelProps } from "@/types/interfaces";
import styles from "./Panel.module.css";
import mobile from "@/styles/themes/mobilenavi.module.css";
import { useThemeContext } from "@/contexts";

export const Panel = ({ items, layout, children }: PanelProps) => {
    const { theme } = useThemeContext();
    const layoutVariant =
        layout === "navbarStyle" ? "navbarStyle" : "footerStyle";
    return (
        <div
            className={`${styles.panel} ${styles[layoutVariant]} ${mobile[theme]}`}>
            {items}
            {children}
        </div>
    );
};
