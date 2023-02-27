export {};
import { Panel } from "../shared/Panel/Panel";
import { NavElement } from "../shared/NavElement/NavElement";
import { Toggle } from "../shared/Toggle/Toggle";
import { ToggleProps } from "@/types";
import styles from "./Footer.module.css";
import config from "../../config/footer.json";

export const Footer = () => {
    //quick config sanitization
    const elements = JSON.parse(JSON.stringify(config));
    return (
        <div className={styles.footer}>
            <Panel
                items={elements.map((el: ToggleProps) => {
                    let uuid = crypto["randomUUID"]();
                    if ("role" in el) {
                        return <Toggle key={uuid} {...el} />;
                    }
                    return <NavElement key={uuid} {...el} />;
                })}
                layout='footerStyle'
            />
        </div>
    );
};
