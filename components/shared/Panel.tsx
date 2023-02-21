import React, { ReactNode } from "react";
import styles from "./Panel.module.css";

interface PanelProps {
    items: React.ReactNode[];
    layout: "navbarStyle" | "footerStyle";
}

export const Panel = ({ items, layout }: PanelProps) => {
    const layoutVariant =
        layout === "navbarStyle" ? "navbarStyle" : "footerStyle";
    return (
        <div className={`${styles.panel} ${styles[layoutVariant]}`}>
            {items}
        </div>
    );
};
