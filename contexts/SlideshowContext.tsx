"use client";
import { createContext, useContext, useState } from "react";
import { ProviderProps } from "@/types";
import { ParsedGalleryData } from "@/types/interfaces";

interface SlideshowGalleryContextType {
    collection: Array<ParsedGalleryData>;
    addToCollection: (
        galleryData: ParsedGalleryData,
        isMounted: boolean
    ) => void;
}

const SlideshowContext = createContext<SlideshowGalleryContextType>({
    collection: [],
    addToCollection: () => {},
});

export const useSlideshowContext = () => useContext(SlideshowContext);

export const SlideshowContextProvider = ({ children }: ProviderProps) => {
    const [collection, setCollection] = useState<Array<ParsedGalleryData>>([]);

    const addToCollection = (
        galleryData: ParsedGalleryData,
        isMounted: boolean
    ) => {
        if (isMounted) {
            setCollection((prevCollection) => [...prevCollection, galleryData]);
        }
    };

    return (
        <SlideshowContext.Provider value={{ collection, addToCollection }}>
            {children}
        </SlideshowContext.Provider>
    );
};
