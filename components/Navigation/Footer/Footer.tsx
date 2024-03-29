import { v4 as uuidv4 } from "uuid";
import { Panel } from "../shared/Panel/Panel";
import { NavElement } from "../shared/NavElement/NavElement";
import { NavElementProps } from "@/types/interfaces";
import styles from "./Footer.module.css";
import config from "@/config/components/footer.json";

export const Footer = () => {
    //quick config sanitization
    const elements: Array<NavElementProps> = JSON.parse(JSON.stringify(config));
    return (
        <div className={styles.footer} role='navigation'>
            <Panel
                items={elements.map((el: NavElementProps) => {
                    let uuid = uuidv4();
                    return <NavElement key={uuid} {...el} />;
                })}
                layout='footerStyle'
            />
        </div>
    );
};
