"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Panel } from "../shared/Panel/Panel";
import { NavElement } from "../shared/NavElement/NavElement";
import { NavElementProps } from "@/types/interfaces";
import { HamburgerButton } from "../Mobile/HamburgerButton/HamburgerButton";
import { HamburgerMenu } from "../Mobile/HamburgerMenu/HamburgerMenu";
import styles from "./Navbar.module.css";
import mobile from "@/styles/themes/mobilenavi.module.css";
import config from "@/components/config/navbar.json";
import { useThemeContext } from "@/contexts";

export const Navbar = () => {
    const { theme } = useThemeContext();
    const elements: Array<NavElementProps> = JSON.parse(JSON.stringify(config));
    return (
        <nav className={`${styles.navbar} ${mobile[theme]}`} role='navigation'>
            <Panel
                items={elements.map((el: NavElementProps) => {
                    let uuid = uuidv4();
                    return <NavElement key={uuid} {...el} />;
                })}
                layout='navbarStyle'>
                <HamburgerButton />
            </Panel>
            <HamburgerMenu />
        </nav>
    );
};
