import { GalleryMode } from "../../GalleryMode";
import { ParsedGalleryData } from "./ParsedGalleryTypes.interface";

export interface GalleryContainerProps {
    galleryData: ParsedGalleryData;
    mode: GalleryMode;
    galleryID: string;
}
