import { GalleryItemProps } from "@/types";
import { GalleryItem } from "../GalleryItem/GalleryItem";

type GalleryGroupProps = {
    items: Array<GalleryItemProps>;
};

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
