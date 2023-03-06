import { GalleryItemProps } from "@/types/interfaces";
import { getImageOrientation } from "@/lib/helpers";
import Image from "next/image";
import style from "./GalleryItem.module.css";

export const GalleryItem = (props: GalleryItemProps) => {
    const { src, width, height, description, mode, priority } = props;
    const orientation = getImageOrientation(height, width);
    return (
        <figure className={`${style.item} ${style[mode]}`}>
            <Image
                className={`${style[orientation]}`}
                src={src}
                width={width}
                height={height}
                quality='85'
                priority={priority}
                alt={description || "Violin made by Piotr Kulcenty"}
            />
            <figcaption>
                <p>{description}</p>
            </figcaption>
        </figure>
    );
};
