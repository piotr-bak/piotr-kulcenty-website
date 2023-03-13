"use client";
import { createContext, useContext, useState } from "react";
import { SplashScreenContextProps } from "@/types/interfaces/context-interfaces/SplashScreenContextProps.interface";
import { ProviderProps } from "@/types";

export const SplashScreenContext = createContext<SplashScreenContextProps>({
    alreadyShowed: false,
    setAlreadyShowed: () => {},
});

export const SplashScreenContextProvider = ({ children }: ProviderProps) => {
    const [alreadyShowed, setAlreadyShowed] = useState<boolean>(false);

    return (
        <SplashScreenContext.Provider
            value={{ alreadyShowed, setAlreadyShowed }}>
            {children}
        </SplashScreenContext.Provider>
    );
};

export const useSplashScreenContext = () => {
    const { alreadyShowed, setAlreadyShowed } = useContext(SplashScreenContext);
    return { alreadyShowed, setAlreadyShowed };
};
