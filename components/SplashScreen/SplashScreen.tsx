import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import brand from "@/public/brand.svg";
import styles from "./SplashScreen.module.css";
import { useSplashScreenContext } from "@/contexts";

export const SplashScreen = () => {
    const { alreadyShowed, setAlreadyShowed } = useSplashScreenContext();
    const [show, setShow] = useState(true);
    const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(
            () => {
                setShow(false);
            },
            alreadyShowed ? 125 : 500
        );
        return () => {
            clearTimeout(timer);
            setAlreadyShowed(true);
        };
    });

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
