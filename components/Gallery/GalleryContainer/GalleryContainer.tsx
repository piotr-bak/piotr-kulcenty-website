"use client";
// import { useEffect } from "react";
// import { useSlideshowContext } from "@/contexts/SlideshowContext";
import { v4 as uuidv4 } from "uuid";
import { GalleryContainerProps } from "@/types/interfaces";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { sliceIntoGroups } from "@/lib/helpers";
import styles from "./GalleryContainer.module.css";

export const GalleryContainer = ({
    configData,
    mode,
    galleryID,
}: GalleryContainerProps) => {
    // const { galleries, addGallery } = useSlideshowContext();

    const groups = sliceIntoGroups(configData, mode);
    let groupCount: number = 0;

    // useEffect(() => {
    //     addGallery(galleryID, configData);
    //     console.log("Current Gallery ID", galleryID);
    //     console.log("Galleries: ", JSON.stringify(galleries));
    // }, []);

    return (
        <div>
            {groups.map((group) => {
                ++groupCount;
                let groupId = uuidv4();
                return (
                    <div key={groupId} className={`${styles[mode]}`}>
                        {group.map((item) => {
                            let itemId = uuidv4();
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
