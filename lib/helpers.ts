import { ConfigFile, NestedArray } from "@/types";
import { UnparsedGalleryItemProps, GalleryItemProps } from "@/types/interfaces";

const parseGalleryItem = (item: UnparsedGalleryItemProps): GalleryItemProps => {
    return {
        ...item,
        width: parseInt(item.width, 10),
        height: parseInt(item.height, 10),
    };
};

// export const parseConfig = (
//     configFile: ConfigFile
// ): NestedArray<GalleryItemProps> => {
//     const result = configFile.map((fragment) => fragment.map(parseGalleryItem));
//     return result;
// };

export const parseConfig = (configFile: any) => {
    const result = configFile.map((fragment: any) =>
        fragment.map(parseGalleryItem)
    );
    return result;
};

export const getImageOrientation = (height: number, width: number) => {
    if (height > width) {
        return "portrait";
    } else {
        return "landscape";
    }
};
