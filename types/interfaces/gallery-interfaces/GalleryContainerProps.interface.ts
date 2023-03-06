import { NestedArray } from "../../NestedArray";
import { GalleryMode } from "../../GalleryMode";
import { GalleryItemProps } from "./GalleryItemProps.interface";

export interface GalleryContainerProps {
    configData: NestedArray<GalleryItemProps>;
    mode: GalleryMode;
}
