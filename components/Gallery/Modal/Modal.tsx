"use client";
import { useEffect, useReducer, useState } from "react";
import { useModalImgContext, useSlideshowContext } from "@/contexts";
import { findImgInCollection, getNextGroupIndex } from "@/lib/helpers/modal";
import { touchReducer } from "@/lib/touchReducer";
import { initialTouchState } from "@/types";
import { SlideshowDirection } from "@/types";
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
    //const [touch, setTouch] = useState<{ start: number; end: number }>({
    //     start: 0,
    //     end: 0,
    // });
    const [touchState, dispatchTouch] = useReducer(
        touchReducer,
        initialTouchState
    );

    const { modalImg, setModalImg, parentGalleryId } = useModalImgContext();
    const { collection } = useSlideshowContext();

    const handleClick = () => {
        setModalImg({ ...modalImg, src: "" });
        setShow(false);
    };

    //The below handles spinner displaying on image load:
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

    //The below handles Modal's slideshow functionality:
    const changeModalImage = (direction: SlideshowDirection) => {
        const gallery = collection[currentImg?.galleryIndex];
        let groupIndex = currentImg?.groupIndex;
        let group = gallery.groups[groupIndex];
        const elementIndex = currentImg.elementIndex;

        const offset: number = direction === "forward" ? +1 : -1;
        const gallerySize = gallery.groups.length;
        let newElementIndex = elementIndex + offset;

        if (newElementIndex >= group.items.length) {
            groupIndex = getNextGroupIndex(gallerySize, groupIndex, offset);
            newElementIndex = 0;
        } else if (newElementIndex < 0) {
            groupIndex = getNextGroupIndex(gallerySize, groupIndex, offset);
            newElementIndex = gallery.groups[groupIndex].items.length - 1;
        }

        let nextElement = gallery.groups[groupIndex].items[newElementIndex];
        setModalImg({
            ...modalImg,
            src: nextElement.src,
            id: nextElement.id,
        });
    };

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
