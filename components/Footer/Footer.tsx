import { v4 as uuidv4 } from "uuid";
import { Panel } from "../shared/Panel/Panel";
import { NavElement } from "../shared/NavElement/NavElement";
import { Toggle } from "../shared/Toggle/Toggle";
import { MobileNavProps } from "@/types/interfaces";
import styles from "./Footer.module.css";
import config from "../../config/footer.json";

export const Footer = () => {
    //quick config sanitization
    const elements: Array<MobileNavProps> = JSON.parse(JSON.stringify(config));
    return (
        <footer className={styles.footer}>
            <Panel
                items={elements.map((el: MobileNavProps) => {
                    let uuid = uuidv4();
                    if ("role" in el) {
                        return <Toggle key={uuid} {...el} />;
                    }
                    return <NavElement key={uuid} {...el} />;
                })}
                layout='footerStyle'
            />
        </footer>
    );
};
