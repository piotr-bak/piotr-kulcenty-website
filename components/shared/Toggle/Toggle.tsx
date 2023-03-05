import React from "react";
import { MobileNavProps } from "@/types/interfaces";
import styles from "./Toggle.module.css";

export const Toggle = (props: MobileNavProps) => {
    const { label, role } = props;
    //const [toggled, setToggled] = useState(false);
    const handleClick = () => {
        //setToggled((toggled) => !toggled);
    };
    return (
        <button
            type='button'
            className={styles.toggle}
            title={label}
            aria-label={label}
            onClick={handleClick}>
            {role}
        </button>
    );
};
