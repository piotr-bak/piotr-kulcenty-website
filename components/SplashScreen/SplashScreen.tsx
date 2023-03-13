import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import brand from "@/public/brand.svg";
import styles from "./SplashScreen.module.css";

export const SplashScreen = () => {
    const [show, setShow] = useState(true);
    const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const onAnimationEnd = () => setIsAnimationCompleted(true);

    return (
        <div
            className={`
            ${styles.splash} 
            ${show ? styles.active : styles.fading} 
            ${isAnimationCompleted ? styles.hidden : null}`}
            onAnimationEnd={onAnimationEnd}>
            <div className={styles.overlay}>
                <Image
                    className={styles.image}
                    src={logo}
                    alt='Logo'
                    priority
                />
                <Image
                    className={styles.image}
                    src={brand}
                    alt='Piotr Kulcenty Branding'
                    priority
                />
            </div>
        </div>
    );
};
