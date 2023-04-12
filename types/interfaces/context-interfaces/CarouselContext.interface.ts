import { ParsedGalleryData } from "../gallery-interfaces/ParsedGalleryTypes.interface";

export type FindModalImgResult = {
    galleryIndex: number;
    groupIndex: number;
    elementIndex: number;
};

export interface CarouselContextType {
    collection: Array<ParsedGalleryData>;
    addToCollection: (
        galleryData: ParsedGalleryData,
        isMounted: boolean
    ) => void;
}
