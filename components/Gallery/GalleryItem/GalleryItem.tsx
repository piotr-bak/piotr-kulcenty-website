"use client";
import { useModalImgContext } from "@/contexts/ModalImgContext";
import { GalleryItemProps } from "@/types/interfaces";
import { getImageOrientation } from "@/lib/helpers";
import Image from "next/image";
//import config from "@/config/gallery.json";
import styles from "./GalleryItem.module.css";

export const GalleryItem = (props: GalleryItemProps) => {
    const { src, width, height, description, mode, priority } = props;
    const orientation = getImageOrientation(height, width);
    const { setImgSrc } = useModalImgContext();
    const handleClick = () => {
        setImgSrc(src);
    };
    //const placeholder = config.placeholder;
    return (
        <figure className={`${styles.item} ${styles[mode]}`}>
            <Image
                className={`${styles[orientation]}`}
                src={src}
                width={width}
                height={height}
                quality={70}
                sizes='320 375 414 600 768 800 1024 1200'
                alt={description || "Violin made by Piotr Kulcenty"}
                onClick={handleClick}
                priority={priority}
                // placeholder='blur'
                // blurDataURL={placeholder}
            />
            <figcaption>
                <p>{description}</p>
            </figcaption>
        </figure>
    );
};
