import { GalleryMode } from "../../GalleryMode";

export interface GallerySingleItem {
    id: string;
    galleryId: string;
    src: string;
    width: number;
    height: number;
    thumbnail?: string;
    description?: string;
    mode: GalleryMode;
    priority: boolean;
}
