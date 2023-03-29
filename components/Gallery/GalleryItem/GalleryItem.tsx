"use client";
import { useModalImgContext } from "@/contexts/ModalImgContext";
import { GallerySingleItem } from "@/types/interfaces";
import { getBlurDataURL, getImageOrientation } from "@/lib/helpers";
import Image from "next/image";
import styles from "./GalleryItem.module.css";

export const GalleryItem = (props: GallerySingleItem) => {
    const {
        id,
        galleryId,
        src,
        width,
        height,
        thumbnail,
        description,
        mode,
        priority,
    } = props;

    const orientation = getImageOrientation(height, width);

    const { setModalImgSrc, setModalImgId, setParentGalleryId } =
        useModalImgContext();

    const handleClick = () => {
        setModalImgSrc(src);
        setModalImgId(id);
        setParentGalleryId(galleryId);
    };

    return (
        <figure className={`${styles.item} ${styles[mode]}`}>
            <Image
                className={`${styles[orientation]}`}
                src={src}
                width={width}
                height={height}
                quality={70}
                alt={description || "Violin made by Piotr Kulcenty"}
                onClick={handleClick}
                priority={priority}
                placeholder={thumbnail ? "blur" : "empty"}
                blurDataURL={thumbnail ? getBlurDataURL(thumbnail) : undefined}
            />
            <figcaption>
                <p>{description}</p>
            </figcaption>
        </figure>
    );
};
