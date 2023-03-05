import { NestedArray } from "../NestedArray";
import { GalleryMode } from "../GalleryMode";
import { GalleryItemProps } from "./GalleryItemProps.interface";

export type GalleryContainerProps = {
    configData: NestedArray<GalleryItemProps>;
    mode: GalleryMode;
};
