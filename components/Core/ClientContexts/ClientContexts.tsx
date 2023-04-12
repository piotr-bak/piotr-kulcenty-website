"use client";
import {
    HamburgerMenuContextProvider,
    ModalImgContextProvider,
    CarouselContextProvider,
    SplashScreenContextProvider,
    ThemeContextProvider,
} from "@/contexts";
import { ProviderProps } from "@/types";

export const ClientContexts = ({ children }: ProviderProps) => {
    return (
        <>
            <ThemeContextProvider>
                <SplashScreenContextProvider>
                    <CarouselContextProvider>
                        <ModalImgContextProvider>
                            <HamburgerMenuContextProvider>
                                {children}
                            </HamburgerMenuContextProvider>
                        </ModalImgContextProvider>
                    </CarouselContextProvider>
                </SplashScreenContextProvider>
            </ThemeContextProvider>
        </>
    );
};
