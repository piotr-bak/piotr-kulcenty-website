import { GalleryMode } from "../GalleryMode";
export interface UnparsedGalleryItemProps {
    src: string;
    width: string;
    height: string;
    description?: string;
    mode: GalleryMode;
}
