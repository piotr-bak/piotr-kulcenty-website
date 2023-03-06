import { useModalImgContext } from "@/contexts/ModalImgContext";
import { GalleryItemProps } from "@/types/interfaces";
import { getImageOrientation } from "@/lib/helpers";
import Image from "next/image";
import style from "./GalleryItem.module.css";

export const GalleryItem = (props: GalleryItemProps) => {
    const { src, width, height, description, mode, priority } = props;
    const orientation = getImageOrientation(height, width);
    const { setImgSrc } = useModalImgContext();
    const handleClick = () => {
        setImgSrc(src);
        console.log("Image source that goes to Context", src);
    };
    return (
        <figure className={`${style.item} ${style[mode]}`}>
            <Image
                className={`${style[orientation]}`}
                src={src}
                width={width}
                height={height}
                quality='85'
                priority={priority}
                sizes='320 480 640 768 1200'
                alt={description || "Violin made by Piotr Kulcenty"}
                onClick={handleClick}
            />
            <figcaption>
                <p>{description}</p>
            </figcaption>
        </figure>
    );
};
