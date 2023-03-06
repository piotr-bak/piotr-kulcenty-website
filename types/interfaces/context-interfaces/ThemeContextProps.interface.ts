import { SetStateAction } from "react";
import { ThemeKey } from "../../ThemeKey";

export interface ContextProps {
    theme: ThemeKey;
    setTheme: React.Dispatch<SetStateAction<ThemeKey>>;
}
