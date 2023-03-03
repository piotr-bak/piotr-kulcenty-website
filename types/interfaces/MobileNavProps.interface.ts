import { NavElementProps } from "./NavElementProps.interface";

export interface MobileNavProps extends NavElementProps {
    role?: "hamburger" | "scroller" | undefined;
}
