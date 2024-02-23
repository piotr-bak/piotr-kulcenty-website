"use client";
import { useThemeContext } from "@/contexts";
import { cormorant } from "@/lib/fonts";
import styles from "./Footnote.module.css";
import typography from "@/styles/themes/typography.module.css";

export const Footnote = () => {
    const { theme } = useThemeContext();
    return (
        <div className={styles.container}>
            <p
                className={`${styles.text} ${cormorant.className} ${typography[theme]}`}>
                All rights reserved. © Piotr Kulcenty, 2024
            </p>
        </div>
    );
};
