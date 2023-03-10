import { useThemeContext } from "@/contexts";
import styles from "./HamburgerButton.module.css";
import colors from "@/styles/themes/mobilenavi.module.css";
import { MobileNavProps } from "@/types/interfaces";

export const HamburgerButton = ({ toggled, handleClick }: MobileNavProps) => {
    const { theme } = useThemeContext();
    return (
        <div
            className={`${styles.general} ${styles.hamburger} ${
                toggled ? styles.active : null
            }`}
            onClick={handleClick}>
            <span className={`${colors[theme]}`}></span>
            <span className={`${colors[theme]}`}></span>
            <span className={`${colors[theme]}`}></span>
        </div>
    );
};
