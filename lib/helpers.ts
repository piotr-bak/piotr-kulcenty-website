import { GalleryMode } from "@/types";
import { GalleryItemProps } from "@/types/interfaces";
import galleryConfig from "@/config/gallery.json";

const sanitizeConfig = (configFile: any) => {
    configFile = JSON.parse(JSON.stringify(configFile));
    return configFile;
};

export const parseConfig = (configFile: any) => {
    sanitizeConfig(configFile);
    const result = configFile.map((entry: any) => {
        if (entry.width) {
            entry.width = parseInt(entry.width, 10);
        }
        if (entry.height) {
            entry.height = parseInt(entry.height, 10);
        }
        return entry;
    });
    return result;
};

export const sliceIntoGroups = (
    array: Array<GalleryItemProps>,
    mode: GalleryMode
) => {
    const fullSize: number = parseInt(galleryConfig.groupSizes.full);
    const compactSize: number = parseInt(galleryConfig.groupSizes.compact);
    const groupSize: number = mode === "full" ? fullSize : compactSize;

    const result = [];

    for (let i = 0; i < array.length; i += groupSize) {
        result.push(array.slice(i, i + groupSize));
    }

    return result;
};

export const getImageOrientation = (height: number, width: number) => {
    if (height > width) {
        return "portrait";
    } else {
        return "landscape";
    }
};
