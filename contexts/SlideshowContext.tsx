"use client";
import { createContext, useContext, useState } from "react";
import { ProviderProps } from "@/types";
import { GalleryItemProps } from "@/types/interfaces";

interface SlideshowItem {
    galleryId: string;
    galleryContent: GalleryItemProps[];
}

interface SlideshowGallery {
    [galleryId: string]: SlideshowItem;
}

interface SlideshowGalleryContextType {
    galleries: SlideshowGallery;
    addGallery: (galleryId: string, galleryContent: GalleryItemProps[]) => void;
}

const SlideshowContext = createContext<SlideshowGalleryContextType>({
    galleries: {},
    addGallery: () => {},
});

export const useSlideshowContext = () => useContext(SlideshowContext);

export const SlideshowContextProvider = ({ children }: ProviderProps) => {
    const [galleries, setGalleries] = useState<SlideshowGallery>({});

    const addGallery = (
        galleryId: string,
        galleryContent: GalleryItemProps[]
    ) => {
        setGalleries((prevGalleries: SlideshowGallery) => ({
            ...prevGalleries,
            [galleryId]: {
                galleryId,
                galleryContent,
            },
        }));
    };

    return (
        <SlideshowContext.Provider value={{ galleries, addGallery }}>
            {children}
        </SlideshowContext.Provider>
    );
};
