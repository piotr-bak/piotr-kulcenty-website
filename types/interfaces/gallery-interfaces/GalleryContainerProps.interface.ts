import { GalleryMode } from "../../GalleryMode";
import { GalleryItemProps } from "./GalleryItemProps.interface";

export interface GalleryContainerProps {
    configData: Array<GalleryItemProps>;
    mode: GalleryMode;
}
