import { SetStateAction } from "react";

export interface HamburgerMenuContextProps {
    toggled: boolean;
    setToggled: React.Dispatch<SetStateAction<boolean>>;
}
