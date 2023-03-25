import { GalleryMode } from "../../GalleryMode";

export interface GalleryItemProps {
    src: string;
    width: number;
    height: number;
    thumbnail?: string;
    description?: string;
    mode: GalleryMode;
    priority: boolean;
}
