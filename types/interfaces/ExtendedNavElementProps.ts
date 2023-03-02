import { NavElementProps } from "./NavElementProps";

export interface ExtendedNavElementProps extends NavElementProps {
    role?: "hamburger" | "scroller" | undefined;
}
