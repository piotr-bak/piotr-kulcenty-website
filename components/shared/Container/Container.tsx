import { ProviderProps } from "@/types";
import styles from "./Container.module.css";

export const Container = ({ children }: ProviderProps) => {
    return <div className={styles.container}>{children}</div>;
};
