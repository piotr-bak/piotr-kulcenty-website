import { GalleryItem } from "../GalleryItem/GalleryItem";
import { GalleryItemProps } from "@/types";

export const GalleryGroup = (elements: Array<GalleryItemProps>) => {
    return (
        <div>
            {elements.map((el) => {
                let uuid = crypto["randomUUID"]();
                return <GalleryItem key={uuid} {...el} />;
            })}
        </div>
    );
};
