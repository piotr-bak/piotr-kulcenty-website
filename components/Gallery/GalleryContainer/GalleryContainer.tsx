"use client";
import { useEffect, useRef } from "react";
import { useCarouselContext } from "@/contexts/CarouselContext";
import { GalleryContainerProps } from "@/types/interfaces";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import styles from "./GalleryContainer.module.css";

export const GalleryContainer = ({
    galleryData,
    mode,
    galleryID,
}: GalleryContainerProps) => {
    const { collection, addToCollection } = useCarouselContext();
    const isMounted = useRef(true);

    //adds content of the currently visited gallery to the
    //CarouselContext as an object - and makes sure that there will be just one
    //object per gallery in the Context (hence useRef and checking whteher
    //the component is mounted);
    useEffect(() => {
        const alreadyExists = collection.some((item) => item.id === galleryID);
        if (!alreadyExists) {
            addToCollection(galleryData, isMounted.current);
        }
        return () => {
            isMounted.current = false;
        };
    }, [collection, addToCollection, galleryData, galleryID]);

    return (
        <div className={styles.container}>
            {galleryData.groups.map((group, index) => {
                const groupId = group.id;
                return (
                    <div key={groupId} className={`${styles[mode]}`}>
                        {group.items.map((item) => {
                            const itemId = item.id;
                            return (
                                <GalleryItem
                                    key={itemId}
                                    {...item}
                                    mode={mode}
                                    priority={index === 0}
                                    galleryId={galleryID}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
