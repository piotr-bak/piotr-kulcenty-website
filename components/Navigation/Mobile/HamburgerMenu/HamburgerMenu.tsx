import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { useHamburgerMenuContext } from "@/contexts/HamburgerMenuContext";
import { useThemeContext } from "@/contexts";
import { cormorant } from "@/lib/fonts";
import config from "@/config/route-config.json";
import style from "./HamburgerMenu.module.css";
import colors from "styles/themes/mobilenavi.module.css";

export const HamburgerMenu = () => {
    const { theme } = useThemeContext();
    const { toggled, setToggled } = useHamburgerMenuContext();
    const handleClick = () => {
        setToggled(false);
    };
    return (
        <div
            className={`${style.menu} ${cormorant.className} ${colors[theme]} ${
                toggled ? style.active : style.inactive
            }`}>
            <ul>
                {config.map((entry) => {
                    let uuid = uuidv4();
                    if (entry.route !== "/") {
                        return (
                            <li key={uuid} onClick={handleClick}>
                                <Link href={entry.route} scroll={true}>
                                    {entry.name}
                                </Link>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </div>
    );
};
