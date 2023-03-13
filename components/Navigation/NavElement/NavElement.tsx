import React from "react";
import { useHamburgerMenuContext, useThemeContext } from "@/contexts";
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
    const { setToggled } = useHamburgerMenuContext();
    const handleMobileMenuClick = () => {
        setToggled(false);
    };
    const element = imgSrc ? (
        <Link href={destination ? destination : ""} passHref>
            <Image
                className={`${filter[theme]} ${styles.image}`}
                src={imgSrc}
                width={38}
                height={43}
                alt={label}
                priority
                onClick={handleMobileMenuClick}
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
