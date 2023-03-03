import { NestedArray } from "../NestedArray";
import { GalleryItemProps } from "./GalleryItemProps.interface";

export type GalleryContainerProps = {
    configData: NestedArray<GalleryItemProps>;
};
