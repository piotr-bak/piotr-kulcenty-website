import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavElement.module.css";

export interface NavElementProps {
    key: string;
    imgSrc?: string;
    label: string;
    destination?: string;
}

export const NavElement = (props: NavElementProps) => {
    const { imgSrc, label, destination } = props;

    const element = imgSrc ? (
        <Link href={destination ? destination : ""} passHref>
            <Image className={styles.image} src={imgSrc} alt={label} />
        </Link>
    ) : (
        <Link href={destination ? destination : ""} passHref>
            <button
                type='button'
                className={styles.button}
                title={label}
                aria-label={label}>
                {label}
            </button>
        </Link>
    );
    return <>{element}</>;
};
