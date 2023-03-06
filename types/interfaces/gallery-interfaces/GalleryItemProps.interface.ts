import { GalleryMode } from "../../GalleryMode";

export interface GalleryItemProps {
    src: string;
    width: number;
    height: number;
    description?: string;
    mode: GalleryMode;
    priority: boolean;
}
