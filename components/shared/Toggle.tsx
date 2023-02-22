import React, { useState } from "react";
import styles from "./Toggle.module.css";
import { ToggleProps } from "@/types";

export const Toggle = (props: ToggleProps) => {
    const { label, role } = props;
    const [toggled, setToggled] = useState(false);
    const handleClick = () => {
        setToggled((toggled) => !toggled);
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
