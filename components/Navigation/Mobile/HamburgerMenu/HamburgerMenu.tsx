import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { HamburgerMenuProps } from "@/types/interfaces";
import { cormorant } from "@/lib/fonts";
import config from "@/config/route-config.json";
import style from "./HamburgerMenu.module.css";
import colors from "styles/themes/mobilenavi.module.css";
import { useThemeContext } from "@/contexts";

export const HamburgerMenu = ({ toggled, handleClick }: HamburgerMenuProps) => {
    const { theme } = useThemeContext();
    return (
        <div
            className={`${style.menu} ${cormorant.className} ${colors[theme]} ${
                toggled ? style.active : style.inactive
            }`}>
            <ul>
                {config.map((entry) => {
                    let uuid = uuidv4();
                    return (
                        <li key={uuid} onClick={handleClick}>
                            <Link href={entry.route}>{entry.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
