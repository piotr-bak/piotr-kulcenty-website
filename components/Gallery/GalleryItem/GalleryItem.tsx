"use client";
import { useModalImgContext } from "@/contexts/ModalImgContext";
import { GalleryItemProps } from "@/types/interfaces";
import { getImageOrientation } from "@/lib/helpers";
import Image from "next/image";
import styles from "./GalleryItem.module.css";

// const holder =
//     "data:image/octet-stream;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoDAAQAAkA4JZACdAEO9qOAAP5b7gVF+ctpAhvKkZ03wb8CXyYgafvKNlKbAAAA";
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
                alt={description || "Violin made by Piotr Kulcenty"}
                onClick={handleClick}
                priority={priority}
                // placeholder='blur'
                // blurDataURL={holder}
            />
            <figcaption>
                <p>{description}</p>
            </figcaption>
        </figure>
    );
};
