import { GalleryItemProps } from "@/types/interfaces";
import Image from "next/image";

export const GalleryItem = (props: GalleryItemProps) => {
    const { src, alt, size, orientation, description } = props;
    return (
        <div>
            <Image
                className={``}
                src={src}
                height={648}
                width={916}
                alt={description || "Violin made by Piotr Kulcenty"}
            />
            <figcaption>
                <p>{description}</p>
            </figcaption>
        </div>
    );
};
