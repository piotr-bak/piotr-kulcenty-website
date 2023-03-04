import { GalleryItemProps } from "@/types/interfaces";
import { getImageOrientation } from "@/lib/helpers";
import Image from "next/image";
import style from "./GalleryItem.module.css";

export const GalleryItem = (props: GalleryItemProps) => {
    const { src, width, height, description } = props;
    const orientation = getImageOrientation(height, width);
    return (
        <div className={style.item}>
            <Image
                className={`${style[orientation]}`}
                src={src}
                width={width}
                height={height}
                quality='85'
                alt={description || "Violin made by Piotr Kulcenty"}
            />
            <figcaption>
                <p>{description}</p>
            </figcaption>
        </div>
    );
};
