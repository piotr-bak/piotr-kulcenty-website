import React, { useState } from "react";
import { useThemeContext } from "@/contexts";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import styles from "./HamburgerButton.module.css";
import colors from "@/styles/themes/mobilenavi.module.css";

export const HamburgerButton = () => {
    const { theme } = useThemeContext();
    const [toggled, setToggled] = useState(false);
    const handleClick = () => {
        setToggled((toggled) => !toggled);
    };
    return (
        <div
            className={`${styles.general} ${styles.hamburger} ${
                toggled ? styles.active : null
            }`}
            onClick={handleClick}>
            <span className={`${colors[theme]}`}></span>
            <span className={`${colors[theme]}`}></span>
            <span className={`${colors[theme]}`}></span>
            <HamburgerMenu toggled={toggled} handleClick={handleClick} />
        </div>
    );
};
