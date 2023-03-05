import { GalleryGroupProps } from "@/types/interfaces";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import style from "./GalleryGroup.module.css";

export const GalleryGroup = ({ items }: GalleryGroupProps, mode: string) => {
    return (
        <div className={style.group}>
            {items.map((item) => {
                let uuid = crypto["randomUUID"]();
                return <GalleryItem key={uuid} {...item} />;
            })}
        </div>
    );
};
