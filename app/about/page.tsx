"use client";
import { useContext, useEffect } from "react";
import { ThemeContex } from "../../context/themeContext";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/hooks";

export default function About() {
    return (
        <>
            <h3>About</h3>
        </>
    );
}
