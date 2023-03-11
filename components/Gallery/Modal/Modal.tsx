"use client";
import { useEffect, useState } from "react";
import { useModalImgContext } from "@/contexts";
import spinner from "../../../public/spinner.svg";
import Image from "next/image";
import style from "./Modal.module.css";

export const Modal = () => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { imgSrc, setImgSrc } = useModalImgContext();

    const handleClick = () => {
        setImgSrc("");
        setShow((show) => false);
    };

    useEffect(() => {
        if (imgSrc) {
            setIsLoading(true);
            setShow(true);
        }
    }, [imgSrc]);

    const handleImageLoad = () => {
        setIsLoading(false);
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
                {imgSrc && (
                    <figure className={`${style.figure}`} onClick={handleClick}>
                        <Image
                            className={style.image}
                            src={imgSrc}
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
