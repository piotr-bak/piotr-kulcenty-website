import { NavElementProps } from "./NavElement";

export interface ToggleProps extends NavElementProps {
    role?: "hamburger" | "scroller" | undefined;
}
