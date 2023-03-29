"use client";
import { useEffect, useState } from "react";
import { useModalImgContext, useSlideshowContext } from "@/contexts";
import spinner from "@/public/spinner-white.svg";
import Image from "next/image";
import style from "./Modal.module.css";
import { findImgInCollection } from "@/lib/helpers";

export const Modal = () => {
    const [show, setShow] = useState(false);
    const [slideshowIndexes, setSlideshowIndexes] = useState<Array<number>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { modalImgSrc, setModalImgSrc, modalImgId, parentGalleryId } =
        useModalImgContext();
    const { collection } = useSlideshowContext();

    const handleClick = () => {
        setModalImgSrc("");
        setShow((show) => false);
    };

    useEffect(() => {
        if (modalImgSrc) {
            setIsLoading(true);
            setShow(true);
        }
    }, [modalImgSrc]);

    const handleImageLoad = () => {
        setIsLoading(false);
        const [targetGroupIndex, targetElementIndex] = findImgInCollection(
            modalImgId,
            collection,
            parentGalleryId
        );
        setSlideshowIndexes([
            targetGroupIndex as number,
            targetElementIndex as number,
        ]);
        console.log("Slideshow indexes", slideshowIndexes);
    };

    if (!show) {
        return null;
    }

    return (
        <div className={style.wrapper}>
            <div className={`${style.backdrop}`}></div>
            <div className={style.modal} onClick={handleClick}>
                {isLoading && (
                    <div className={style.loader}>
                        <Image src={spinner} alt='Loading image...' />
                    </div>
                )}
                {modalImgSrc && (
                    <figure className={`${style.figure}`} onClick={handleClick}>
                        <Image
                            className={style.image}
                            src={modalImgSrc}
                            fill
                            priority
                            alt='Detailed view of the instrument built by Piotr Kulcenty'
                            onLoad={handleImageLoad}
                        />
                    </figure>
                )}
            </div>
        </div>
    );
};
