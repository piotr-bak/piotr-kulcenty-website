"use client";
import { useEffect, useRef, useState } from "react";
import { useSlideshowContext } from "@/contexts/SlideshowContext";
import { GalleryContainerProps } from "@/types/interfaces";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { scrollToTop } from "@/lib/utils";
import Image from "next/image";
import arrow from "@/public/arrow.svg";
import styles from "./GalleryContainer.module.css";

export const GalleryContainer = ({
    galleryData,
    mode,
    galleryID,
}: GalleryContainerProps) => {
    const { collection, addToCollection } = useSlideshowContext();
    const isMounted = useRef(true);
    const groupRefs = useRef<(HTMLDivElement | null)[]>([]);
    const lastGroupRef = useRef<HTMLDivElement | null>(null);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
    const [pastLastGroup, setPastLastGroup] = useState(false);

    //adds content of the currently visited gallery to the
    //SlideshowContext as an object - and makes sure that there will be just one
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

    //the below makes sure that the currentGroupIndex is set to the galleryGroup that the
    //user looks at - so the scroll button works correctly. Correctly = it
    //scrolls just to the next instrument in the gallery - or to the very top of
    //the page, if the last instrument has been looked upon
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentGroupIndex(
                            parseInt(
                                (entry.target as HTMLElement).dataset
                                    .index as string
                            )
                        );
                        entry.target === lastGroupRef.current
                            ? setPastLastGroup(true)
                            : setPastLastGroup(false);
                    }
                });
            },
            { threshold: 0.5 }
        );
        groupRefs.current.forEach((groupRef) => {
            observer.observe(groupRef!);
        });
        return () => {
            observer.disconnect();
        };
    }, [groupRefs]);

    const scrollToNextGroup = () => {
        let scrollPadding = window.innerHeight * 0.1;
        if (currentGroupIndex < groupRefs.current.length - 1) {
            window.scrollTo({
                top:
                    groupRefs.current[currentGroupIndex + 1]!.offsetTop -
                    scrollPadding,
                behavior: "smooth",
            });
        } else if (currentGroupIndex === groupRefs.current.length - 1) {
            scrollToTop();
        }
    };

    return (
        <div className={styles.container}>
            {galleryData.groups.map((group, index) => {
                const groupId = group.id;
                return (
                    <div
                        key={groupId}
                        className={`${styles[mode]}`}
                        ref={(ref) => {
                            groupRefs.current[index] = ref;
                            if (index === galleryData.groups.length - 1) {
                                lastGroupRef.current = ref;
                            }
                        }}
                        data-index={index}>
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
            <button
                type='button'
                title={
                    !pastLastGroup
                        ? `${"Scroll to the next instrument"}`
                        : `${"Scroll to top"}`
                }
                className={
                    !pastLastGroup ? `${styles.arrowDown}` : `${styles.arrowUp}`
                }
                onClick={(event) => {
                    event.stopPropagation();
                    scrollToNextGroup();
                }}>
                <Image src={arrow} alt='Previous image' />
            </button>
        </div>
    );
};
