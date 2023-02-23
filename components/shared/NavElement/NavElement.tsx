import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavElement.module.css";
import { cormorant } from "@/lib/fonts";
import { NavElementProps } from "@/types";

export const NavElement = (props: NavElementProps) => {
    const { imgSrc, label, destination } = props;

    const element = imgSrc ? (
        <Link
            className={styles.wrap}
            href={destination ? destination : ""}
            passHref>
            <Image
                className={styles.image}
                src={imgSrc}
                width={38}
                height={48}
                alt={label}
            />
        </Link>
    ) : (
        <div className={styles.wrap} title={label} aria-label={label}>
            <Link
                className={`${styles.button} ${cormorant.className}`}
                href={destination ? destination : ""}>
                {label}
            </Link>
        </div>
    );
    return <>{element}</>;
};
