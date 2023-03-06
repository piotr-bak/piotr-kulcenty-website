import { createContext, useContext, useState } from "react";
import { ProviderProps } from "@/types";
import { ModalImgContextProps } from "@/types/interfaces";

export const ModalImgContext = createContext<ModalImgContextProps>({
    imgSrc: "",
    setImgSrc: () => {},
});

export const ModalImgContextProvider = ({ children }: ProviderProps) => {
    const [imgSrc, setImgSrc] = useState<string>("");

    return (
        <ModalImgContext.Provider value={{ imgSrc, setImgSrc }}>
            {children}
        </ModalImgContext.Provider>
    );
};

export const useModalImgContext = () => useContext(ModalImgContext);
