"use client";
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
        if (alreadyShowed) {
            setShow(false);
        } else {
            setTimeout(() => {
                setShow(false);
                setAlreadyShowed(true);
                document.body.style.overflow = "auto";
            }, 2000);
        }
    }, [alreadyShowed, setAlreadyShowed]);

    const onAnimationEnd = () => setIsAnimationCompleted(true);

    return (
        <div
            className={`
            ${styles.splash} 
            ${show ? styles.fading : styles.hidden} 
            ${isAnimationCompleted ? styles.hidden : null}`}
            onAnimationEnd={onAnimationEnd}>
            <div className={styles.overlay}>
                <Image className={styles.logo} src={logo} alt='Logo' priority />
                <Image
                    className={styles.brand}
                    src={brand}
                    alt='Piotr Kulcenty Branding'
                    priority
                />
            </div>
        </div>
    );
};
