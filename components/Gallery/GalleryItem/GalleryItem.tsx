"use client";
import { useModalImgContext } from "@/contexts/ModalImgContext";
import { GalleryItemProps } from "@/types/interfaces";
import { getBlurDataURL, getImageOrientation } from "@/lib/helpers";
import Image from "next/image";
import styles from "./GalleryItem.module.css";

// const holder =
//     "data:image/octet-stream;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoDAAQAAkA4JZACdAEO9qOAAP5b7gVF+ctpAhvKkZ03wb8CXyYgafvKNlKbAAAA";

// const thumbhash: string =
//     "28,39,12,3D,8A,88,76,87,7F,78,88,89,98,77,78,87,77,80,7A,07,98";

export const GalleryItem = (props: GalleryItemProps) => {
    const { src, width, height, thumbnail, description, mode, priority } =
        props;
    const orientation = getImageOrientation(height, width);
    const { setImgSrc } = useModalImgContext();
    const handleClick = () => {
        setImgSrc(src);
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
