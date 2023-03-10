import { v4 as uuidv4 } from "uuid";
import { Panel } from "../Panel/Panel";
import { NavElement } from "../NavElement/NavElement";
import { NavElementProps } from "@/types/interfaces";
import styles from "./Footer.module.css";
import config from "../../../config/footer.json";

export const Footer = () => {
    //quick config sanitization
    const elements: Array<NavElementProps> = JSON.parse(JSON.stringify(config));
    return (
        <footer className={styles.footer} role='navigation'>
            <Panel
                items={elements.map((el: NavElementProps) => {
                    let uuid = uuidv4();
                    return <NavElement key={uuid} {...el} />;
                })}
                layout='footerStyle'
            />
        </footer>
    );
};
