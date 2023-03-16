"use client";
import { createContext, useContext, useState } from "react";
import { HamburgerMenuContextProps } from "@/types/interfaces/context-interfaces/HamburgerMenuContextProps.interface";
import { ProviderProps } from "@/types";

export const HamburgerMenuContext = createContext<HamburgerMenuContextProps>({
    toggled: false,
    setToggled: () => {},
});

export const HamburgerMenuContextProvider = ({ children }: ProviderProps) => {
    const [toggled, setToggled] = useState<boolean>(false);

    return (
        <HamburgerMenuContext.Provider value={{ toggled, setToggled }}>
            {children}
        </HamburgerMenuContext.Provider>
    );
};

export const useHamburgerMenuContext = () => {
    const { toggled, setToggled } = useContext(HamburgerMenuContext);
    return { toggled, setToggled };
};
