"use client";
import { useEffect, useRef } from "react";
import { useSlideshowContext } from "@/contexts/SlideshowContext";
import { GalleryContainerProps } from "@/types/interfaces";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import styles from "./GalleryContainer.module.css";

export const GalleryContainer = ({
    galleryData,
    mode,
    galleryID,
}: GalleryContainerProps) => {
    const { collection, addToCollection } = useSlideshowContext();
    const isMounted = useRef(true);
    useEffect(() => {
        const alreadyExists = collection.some((item) => item.id === galleryID);
        if (!alreadyExists) {
            {
                console.log(galleryID);
            }
            addToCollection(galleryData, isMounted.current);
            console.log(collection);
        }

        return () => {
            isMounted.current = false;
        };
    }, [collection, addToCollection, galleryData, galleryID]);

    let groupCount: number = 0;

    return (
        <div>
            {galleryData.groups.map((group) => {
                ++groupCount;
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
                                    priority={groupCount === 1 ? true : false}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
