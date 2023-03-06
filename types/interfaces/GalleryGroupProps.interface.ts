import { GalleryMode } from "../GalleryMode";
import { GalleryItemProps } from "./GalleryItemProps.interface";
export interface GalleryGroupProps {
    items: Array<GalleryItemProps>;
    mode: GalleryMode;
    priorityGroup: boolean;
}
