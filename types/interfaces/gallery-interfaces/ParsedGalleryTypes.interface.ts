export interface ParsedGalleryGroupItem {
    id: string;
    src: string;
    width: number;
    height: number;
    thumbnail?: string;
    description?: string;
}

export interface ParsedGalleryGroup {
    id: string;
    items: Array<ParsedGalleryGroupItem>;
}

export interface ParsedGalleryData {
    id: string;
    groups: Array<ParsedGalleryGroup>;
}
