"use client";
import { createContext, useContext, useState } from "react";
import { ProviderProps } from "@/types";
import { ModalImgContextProps } from "@/types/interfaces";

export const ModalImgContext = createContext<ModalImgContextProps>({
    modalImgSrc: "",
    setModalImgSrc: () => {},
    modalImgId: "",
    setModalImgId: () => {},
    parentGalleryId: "",
    setParentGalleryId: () => {},
});

export const ModalImgContextProvider = ({ children }: ProviderProps) => {
    const [modalImgSrc, setModalImgSrc] = useState<string>("");
    const [modalImgId, setModalImgId] = useState<string>("");
    const [parentGalleryId, setParentGalleryId] = useState<string>("");

    return (
        <ModalImgContext.Provider
            value={{
                modalImgSrc,
                setModalImgSrc,
                modalImgId,
                setModalImgId,
                parentGalleryId,
                setParentGalleryId,
            }}>
            {children}
        </ModalImgContext.Provider>
    );
};

export const useModalImgContext = () => useContext(ModalImgContext);
