import React from "react";
import { PanelProps } from "@/types/interfaces";
import styles from "./Panel.module.css";

export const Panel = ({ items, layout, children }: PanelProps) => {
    const layoutVariant =
        layout === "navbarStyle" ? "navbarStyle" : "footerStyle";
    return (
        <div className={`${styles.panel} ${styles[layoutVariant]}`}>
            {items}
            {children}
        </div>
    );
};
