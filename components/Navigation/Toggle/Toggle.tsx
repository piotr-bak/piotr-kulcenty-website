import React from "react";
import Image from "next/image";
import { ToggleProps } from "@/types";
import FASolidBarsIcon from "@/public/bars-solid.svg";
import styles from "./Toggle.module.css";

export const Toggle = (props: ToggleProps) => {
    const role = props;
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
            <Image
                className={styles.hamburger}
                src={FASolidBarsIcon}
                alt='Open mobile menu'
                priority
            />
            button
        </button>
    );
};
