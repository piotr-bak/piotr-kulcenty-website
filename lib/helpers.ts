import { thumbHashToDataURL } from "thumbhash";
import {
    GallerySingleItem,
    UnparsedGalleryData,
    UnparesdGalleryGroup,
    UnparsedGallerySingleItem,
    ParsedGalleryData,
} from "@/types/interfaces";

const sanitizeData = (dataFile: UnparsedGalleryData) => {
    dataFile = JSON.parse(JSON.stringify(dataFile));
    return dataFile;
};

//Check whether the type conversion is correct
const parseGalleryGroup = (group: UnparesdGalleryGroup) => {
    const result = {
        ...group,
        items: group.items.map(
            (item: UnparsedGallerySingleItem | GallerySingleItem) => {
                if (item.width) {
                    item.width = parseInt(item.width as string, 10);
                }
                if (item.height) {
                    item.height = parseInt(item.height as string, 10);
                }
                return item as GallerySingleItem;
            }
        ),
    };
    return result;
};

export const parseGalleryData = (
    dataFile: UnparsedGalleryData
): ParsedGalleryData => {
    sanitizeData(dataFile);
    const result = {
        ...dataFile,
        groups: dataFile.groups.map((group: UnparesdGalleryGroup) => {
            return parseGalleryGroup(group);
        }),
    };
    return result;
};

export const getImageOrientation = (height: number, width: number) => {
    if (height > width) {
        return "portrait";
    } else {
        return "landscape";
    }
};

const hashToBinary = (thumbhash: string): Uint8Array => {
    const cleanedHash = thumbhash.replace(/[\s,\[\]]/g, "");
    if (cleanedHash.length % 2 !== 0 || /[^0-9a-fA-F]/.test(cleanedHash)) {
        throw new Error("Image thumbnail hash data invalid");
    }
    const binaryData = new Uint8Array(cleanedHash.length / 2);
    for (let i = 0; i < cleanedHash.length; i += 2) {
        const byte = parseInt(cleanedHash.slice(i, i + 2), 16);
        binaryData[i / 2] = byte;
    }
    return binaryData;
};

export const getBlurDataURL = (thumbhash: string) => {
    // uses an awesome ThumbHash algorithm by Evan Wallace - https://evanw.github.io/thumbhash/
    const blurDataURL = thumbHashToDataURL(hashToBinary(thumbhash));
    return blurDataURL;
};
