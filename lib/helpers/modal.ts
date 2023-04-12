import {
    ParsedGalleryData,
    ParsedGalleryGroupItem,
    FindModalImgResult,
} from "@/types/interfaces";

export const findImgInCollection = (
    modalImgId: string,
    collection: Array<ParsedGalleryData>,
    parentGalleryId: string
): FindModalImgResult => {
    const galleryIndex = collection.findIndex(
        (entry) => entry.id === parentGalleryId
    );
    const gallery = collection[galleryIndex];
    if (!gallery) {
        throw new Error(`Parent gallery ${parentGalleryId} not found`);
    }
    const groupIndex = gallery.groups.findIndex((group) =>
        group.items.some((item) => item.id === modalImgId)
    );
    const group = gallery.groups[groupIndex];
    if (!group) {
        throw new Error(
            `Parent gallery group of the image ${modalImgId} not found`
        );
    }
    const elementIndex = group.items.findIndex((el) => el.id === modalImgId);
    if (elementIndex === -1) {
        throw new Error(`Image ${modalImgId} not found in the gallery`);
    }

    return { galleryIndex, groupIndex, elementIndex };
};

export const getNextGroupIndex = (
    gallerySize: number,
    groupIndex: number,
    offset: number
) => {
    let nextGroupIndex = groupIndex + offset;
    if (nextGroupIndex >= gallerySize) {
        nextGroupIndex = 0;
    } else if (nextGroupIndex < 0) {
        nextGroupIndex = gallerySize - 1;
    }
    return nextGroupIndex;
};

export const preloadImage = (preloadedItem: ParsedGalleryGroupItem) => {
    let img = new Image();
    img.src = preloadedItem.src;

    if (img.complete) {
        //if image is already in the cache, no need to preload it
        return;
    }
};
