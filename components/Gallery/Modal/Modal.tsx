"use client";
import { useEffect, useState } from "react";
import { useModalImgContext, useSlideshowContext } from "@/contexts";
import spinner from "@/public/spinner-white.svg";
import arrow from "@/public/arrow.svg";
import Image from "next/image";
import style from "./Modal.module.css";
import { findImgInCollection, getNextGroupIndex } from "@/lib/helpers/modal";
import { SlideshowDirection } from "@/types";
import { FindModalImgResult } from "@/types/interfaces";

export const Modal = () => {
    const [show, setShow] = useState(false);
    const [currentImg, setCurrentImg] = useState<FindModalImgResult>({
        galleryIndex: 0,
        groupIndex: 0,
        elementIndex: 0,
    });
    const [isLoading, setIsLoading] = useState(true);
    const { modalImg, setModalImg, parentGalleryId } = useModalImgContext();
    const { collection } = useSlideshowContext();

    const handleClick = () => {
        setModalImg({ ...modalImg, src: "" });
        setShow(false);
    };

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
                    <figure className={`${style.figure}`} onClick={handleClick}>
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
