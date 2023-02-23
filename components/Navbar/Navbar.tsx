import { Logo } from "../Logo/Logo";
import { Panel } from "../shared/Panel/Panel";
import { NavElement } from "../shared/NavElement/NavElement";
import { Toggle } from "../shared/Toggle/Toggle";
import { ToggleProps } from "@/types";
import styles from "./Navbar.module.css";
import config from "../../data/config/navbar.json";

export const Navbar = () => {
    const elements = JSON.parse(JSON.stringify(config));
    return (
        <nav className={styles.navbar}>
            <Logo />
            <Panel
                items={elements.map((el: ToggleProps) => {
                    let uuid = crypto["randomUUID"]();
                    if ("role" in el) {
                        return <Toggle key={uuid} {...el} />;
                    }
                    return <NavElement key={uuid} {...el} />;
                })}
                layout='navbarStyle'
            />
        </nav>
    );
};
