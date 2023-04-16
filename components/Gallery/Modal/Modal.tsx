"use client";
import { useEffect, useReducer, useState } from "react";
import { useModalImgContext, useCarouselContext } from "@/contexts";
import {
    findImgInCollection,
    getNextGroupIndex,
    preloadImage,
} from "@/lib/helpers/modal";
import { touchReducer } from "@/lib/touchReducer";
import { initialTouchState } from "@/types";
import { CarouselDirection } from "@/types";
import { FindModalImgResult } from "@/types/interfaces";
import spinner from "@/public/spinner-white.svg";
import arrow from "@/public/arrow.svg";
import Image from "next/image";
import style from "./Modal.module.css";
import config from "@/components/config/modal.json";

export const Modal = () => {
    const [show, setShow] = useState(false);
    const [currentImg, setCurrentImg] = useState<FindModalImgResult>({
        galleryIndex: 0,
        groupIndex: 0,
        elementIndex: 0,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [touchState, dispatchTouch] = useReducer(
        touchReducer,
        initialTouchState
    );

    const { modalImg, setModalImg, parentGalleryId } = useModalImgContext();
    const { collection } = useCarouselContext();

    const handleClick = () => {
        setModalImg({ ...modalImg, src: "" });
        setShow(false);
    };

    //The below handles spinner displaying on image load and the next image preload
    useEffect(() => {
        if (modalImg.src) {
            setIsLoading(true);
            setShow(true);
        }
    }, [modalImg.src]);

    const handleImageLoad = () => {
        setIsLoading(false);
        setCurrentImg(
            findImgInCollection(modalImg.id, collection, parentGalleryId)
        );
    };

    if (!show) {
        return null;
    }

    //The below handles the touch events for sliding the carousel left/right
    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        dispatchTouch({ type: "start", value: touch.clientX });
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touch = e.changedTouches[0];
        dispatchTouch({ type: "end", value: touch.clientX });

        const delta = touchState.end - touchState.start;
        const swipeLength = config.sensitivity;

        if (delta > swipeLength) {
            changeModalImage("forward");
        }
        if (delta < -swipeLength) {
            changeModalImage("backward");
        }
    };

    //The below handles Modal's carousel functionality:
    const changeModalImage = (direction: CarouselDirection) => {
        const gallery = collection[currentImg?.galleryIndex];
        if (!gallery) return;

        const { groups } = gallery;
        let { groupIndex = 0, elementIndex = 0 } = currentImg ?? {};
        let group = groups[groupIndex];
        const offset = direction === "forward" ? 1 : -1;
        const gallerySize = groups.length;
        const NEXT_GROUP = getNextGroupIndex(gallerySize, groupIndex, offset);
        const PREV_GROUP = getNextGroupIndex(gallerySize, groupIndex, -offset);
        const LAST_ELEMENT_INDEX = group.items.length - 1;

        let nextElementIndex = elementIndex + offset;
        if (nextElementIndex < 0 || nextElementIndex > LAST_ELEMENT_INDEX) {
            groupIndex = offset > 0 ? NEXT_GROUP : PREV_GROUP;
            group = groups[groupIndex];
            nextElementIndex = offset > 0 ? 0 : LAST_ELEMENT_INDEX;
        }

        let nextPreloadElementIndex = nextElementIndex + offset;
        if (
            nextPreloadElementIndex < 0 ||
            nextPreloadElementIndex > LAST_ELEMENT_INDEX
        ) {
            nextPreloadElementIndex = offset > 0 ? 0 : LAST_ELEMENT_INDEX;
            groupIndex = offset > 0 ? NEXT_GROUP : PREV_GROUP;
        }

        const preloadGroupIndex =
            nextPreloadElementIndex === 0 ||
            nextPreloadElementIndex === LAST_ELEMENT_INDEX
                ? offset > 0
                    ? NEXT_GROUP
                    : PREV_GROUP
                : groupIndex;

        const nextElement = group.items[nextElementIndex];
        const preloadElement =
            groups[preloadGroupIndex].items[nextPreloadElementIndex];

        setModalImg({ ...modalImg, src: nextElement.src, id: nextElement.id });
        preloadImage(preloadElement);
    };

    return (
        <div className={style.wrapper}>
            <div className={`${style.backdrop}`}></div>
            <div className={style.modal} onClick={handleClick}>
                {isLoading && (
                    <div className={style.loader}>
                        <Image src={spinner} alt='Loading image...' />
                    </div>
                )}
                {modalImg.src && (
                    <figure
                        className={`${style.figure}`}
                        onClick={handleClick}
                        onTouchStart={(e) => handleTouchStart(e)}
                        onTouchEnd={handleTouchEnd}>
                        <button
                            type='button'
                            title='Previous image'
                            className={style.button}
                            onClick={(event) => {
                                event.stopPropagation();
                                changeModalImage("backward");
                            }}>
                            <Image src={arrow} alt='Previous image' />
                        </button>
                        <Image
                            className={style.image}
                            src={modalImg.src}
                            quality='100'
                            fill
                            priority
                            alt='Detailed view of the instrument built by Piotr Kulcenty'
                            onLoad={handleImageLoad}
                        />
                        <button
                            type='button'
                            title='Next image'
                            className={style.button}
                            onClick={(event) => {
                                event.stopPropagation();
                                changeModalImage("forward");
                            }}>
                            <Image src={arrow} alt='Next image' />
                        </button>
                    </figure>
                )}
            </div>
        </div>
    );
};
