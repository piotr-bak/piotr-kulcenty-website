"use client";
import {
    HamburgerMenuContextProvider,
    ModalImgContextProvider,
    SplashScreenContextProvider,
    ThemeContextProvider,
} from "@/contexts";
import { ProviderProps } from "@/types";

export const ClientContexts = ({ children }: ProviderProps) => {
    return (
        <>
            <ThemeContextProvider>
                <SplashScreenContextProvider>
                    <ModalImgContextProvider>
                        <HamburgerMenuContextProvider>
                            {children}
                        </HamburgerMenuContextProvider>
                    </ModalImgContextProvider>
                </SplashScreenContextProvider>
            </ThemeContextProvider>
        </>
    );
};
