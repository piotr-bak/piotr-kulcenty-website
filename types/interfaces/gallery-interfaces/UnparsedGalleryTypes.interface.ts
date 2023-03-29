export interface UnparsedGallerySingleItem {
    id: string;
    src: string;
    width?: string;
    height?: string;
    thumbnail?: string;
    description?: string;
}

export interface UnparesdGalleryGroup {
    id: string;
    items: Array<UnparsedGallerySingleItem>;
}

export interface UnparsedGalleryData {
    id: string;
    groups: Array<UnparesdGalleryGroup>;
}
