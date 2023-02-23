import { Logo } from "./Logo";
import { Panel } from "./shared/Panel";
import { NavElement } from "./shared/NavElement";
import { Toggle } from "./shared/Toggle";
import { ToggleProps } from "@/types";
import styles from "./Navbar.module.css";
import config from "../data/config/navbar.json";

export const Navbar = () => {
    const elements = JSON.parse(JSON.stringify(config));
    return (
        <div className={styles.navbar}>
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
        </div>
    );
};
