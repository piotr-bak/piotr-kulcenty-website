import React, { ReactNode } from "react";
import { PanelProps } from "@/types/interfaces";
import styles from "./Panel.module.css";

export const Panel = ({ items, layout }: PanelProps) => {
    const layoutVariant =
        layout === "navbarStyle" ? "navbarStyle" : "footerStyle";
    return (
        <div className={`${styles.panel} ${styles[layoutVariant]}`}>
            {items}
        </div>
    );
};
