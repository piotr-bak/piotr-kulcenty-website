import { v4 as uuidv4 } from "uuid";
import { GalleryGroupProps } from "@/types/interfaces";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import style from "./GalleryGroup.module.css";

export const GalleryGroup = ({ items, mode }: GalleryGroupProps) => {
    return (
        <div className={style[mode]}>
            {items.map((item) => {
                let uuid = uuidv4();
                return <GalleryItem key={uuid} {...item} mode={mode} />;
            })}
        </div>
    );
};
