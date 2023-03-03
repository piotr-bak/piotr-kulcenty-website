import Image from "next/image";
import { GalleryItemProps } from "@/types";

export const GalleryItem = ({
    src,
    alt,
    size,
    orientation,
    description,
}: GalleryItemProps) => {
    return (
        <div>
            <Image
                className={``}
                src={""}
                width={0}
                height={0}
                alt={description || "Violin made by Piotr Kulcenty"}
            />
            <figcaption>
                <p>{description}</p>
            </figcaption>
        </div>
    );
};
