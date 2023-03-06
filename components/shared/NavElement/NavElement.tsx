import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";
import { NavElementProps } from "@/types/interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavElement.module.css";
import typography from "@/styles/themes/typography.module.css";
import filter from "@/styles/themes/filters.module.css";
import { cormorant } from "@/lib/fonts";

export const NavElement = (props: NavElementProps) => {
    const { imgSrc, label, destination } = props;
    const { theme } = useThemeContext();
    const element = imgSrc ? (
        <Link
            className={styles.wrap}
            href={destination ? destination : ""}
            passHref>
            <Image
                className={`${filter[theme]} ${styles.image}`}
                src={imgSrc}
                width={38}
                height={48}
                alt={label}
                priority
            />
        </Link>
    ) : (
        <div className={styles.wrap} title={label} aria-label={label}>
            <Link
                className={`${styles.button} ${cormorant.className} ${typography[theme]}`}
                href={destination ? destination : ""}>
                {label}
            </Link>
        </div>
    );
    return <>{element}</>;
};
