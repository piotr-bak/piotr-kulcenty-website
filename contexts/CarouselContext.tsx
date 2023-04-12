"use client";
import { createContext, useContext, useState } from "react";
import { ProviderProps } from "@/types";
import { ParsedGalleryData, CarouselContextType } from "@/types/interfaces";

const CarouselContext = createContext<CarouselContextType>({
    collection: [],
    addToCollection: () => {},
});

export const useCarouselContext = () => useContext(CarouselContext);

export const CarouselContextProvider = ({ children }: ProviderProps) => {
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
        <CarouselContext.Provider value={{ collection, addToCollection }}>
            {children}
        </CarouselContext.Provider>
    );
};
