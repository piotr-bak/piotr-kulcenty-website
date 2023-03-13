import { useThemeContext } from "@/contexts";
import { useHamburgerMenuContext } from "@/contexts/HamburgerMenuContext";
import styles from "./HamburgerButton.module.css";
import colors from "@/styles/themes/mobilenavi.module.css";

export const HamburgerButton = () => {
    const { theme } = useThemeContext();
    const { toggled, setToggled } = useHamburgerMenuContext();

    const handleClick = () => {
        setToggled(true);
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
        </div>
    );
};
