import { GalleryGroupProps } from "@/types/interfaces";
import { GalleryItem } from "../GalleryItem/GalleryItem";

export const GalleryGroup = ({ items }: GalleryGroupProps) => {
    return (
        <div>
            {items.map((item) => {
                let uuid = crypto["randomUUID"]();
                return <GalleryItem key={uuid} {...item} />;
            })}
        </div>
    );
};
