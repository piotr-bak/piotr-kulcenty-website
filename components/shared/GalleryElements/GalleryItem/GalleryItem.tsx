import Image from "next/image";
import { GalleryItemProps } from "@/types";

export const GalleryItem = ({ ...props }: GalleryItemProps) => {
    return (
        <div>
            <Image
                className={``}
                src={""}
                width={0}
                height={0}
                alt={props.description || "Violin made by Piotr Kulcenty"}
            />
            <figcaption>
                <p>{props.description}</p>
            </figcaption>
        </div>
    );
};
