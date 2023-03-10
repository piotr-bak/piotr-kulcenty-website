import { v4 as uuidv4 } from "uuid";
import { Panel } from "../Panel/Panel";
import { NavElement } from "../NavElement/NavElement";
import { NavElementProps } from "@/types/interfaces";
import { HamburgerButton } from "../Mobile/HamburgerButton/HamburgerButton";
import styles from "./Navbar.module.css";
import config from "@/config/navbar.json";

export const Navbar = () => {
    //quick config sanitization
    const elements: Array<NavElementProps> = JSON.parse(JSON.stringify(config));
    return (
        <nav className={styles.navbar} role='navigation'>
            <Panel
                items={elements.map((el: NavElementProps) => {
                    let uuid = uuidv4();
                    return <NavElement key={uuid} {...el} />;
                })}
                layout='navbarStyle'>
                <HamburgerButton />
            </Panel>
        </nav>
    );
};
