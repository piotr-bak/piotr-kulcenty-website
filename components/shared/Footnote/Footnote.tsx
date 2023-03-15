import { cormorant } from "@/lib/fonts";
import styles from "./Footnote.module.css";

export const Footnote = () => {
    return (
        <div className={styles.container}>
            <p className={`${styles.text} ${cormorant.className}`}>
                All rights reserved. © Piotr Kulcenty, 2023
            </p>
        </div>
    );
};
