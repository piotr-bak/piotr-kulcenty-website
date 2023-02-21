import { Panel } from "./shared/Panel";
import { NavElement } from "./shared/NavElement";
import { Toggle } from "./shared/Toggle";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const elements = [
        {
            id: crypto["randomUUID"](),
            label: "Home",
            destination: "/",
        },
        {
            id: crypto["randomUUID"](),
            label: "Brand - Piotr Kulcenty Violins",
            destination: "/",
        },
        {
            id: crypto["randomUUID"](),
            label: "About",
            destination: "/",
        },
        {
            id: crypto["randomUUID"](),
            label: "Navigation menu",
            role: "hamburger" as const,
        },
    ];
    return (
        <div className={styles.navbar}>
            <Panel
                items={elements.map((el) => {
                    if ("role" in el) {
                        return <Toggle key={el.id} {...el} />;
                    }
                    return <NavElement key={el.id} {...el} />;
                })}
                layout='navbarStyle'
            />
        </div>
    );
};
