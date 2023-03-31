"use client";
import { createContext, useContext, useState } from "react";
import { ProviderProps } from "@/types";
import { ModalImgContextProps, ModalImgState } from "@/types/interfaces";

export const ModalImgContext = createContext<ModalImgContextProps>({
    modalImg: { src: "", id: "" },
    setModalImg: () => {},
    parentGalleryId: "",
    setParentGalleryId: () => {},
});

export const ModalImgContextProvider = ({ children }: ProviderProps) => {
    const [modalImg, setModalImg] = useState<ModalImgState>({
        src: "",
        id: "",
    });
    const [parentGalleryId, setParentGalleryId] = useState<string>("");

    return (
        <ModalImgContext.Provider
            value={{
                modalImg,
                setModalImg,
                parentGalleryId,
                setParentGalleryId,
            }}>
            {children}
        </ModalImgContext.Provider>
    );
};

export const useModalImgContext = () => useContext(ModalImgContext);
