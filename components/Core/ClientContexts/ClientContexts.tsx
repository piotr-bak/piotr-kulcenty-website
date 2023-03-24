"use client";
import {
    HamburgerMenuContextProvider,
    ModalImgContextProvider,
    SlideshowContextProvider,
    SplashScreenContextProvider,
    ThemeContextProvider,
} from "@/contexts";
import { ProviderProps } from "@/types";

export const ClientContexts = ({ children }: ProviderProps) => {
    return (
        <>
            <ThemeContextProvider>
                <SplashScreenContextProvider>
                    <SlideshowContextProvider>
                        <ModalImgContextProvider>
                            <HamburgerMenuContextProvider>
                                {children}
                            </HamburgerMenuContextProvider>
                        </ModalImgContextProvider>
                    </SlideshowContextProvider>
                </SplashScreenContextProvider>
            </ThemeContextProvider>
        </>
    );
};
