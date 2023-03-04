export const getImageOrientation = (height: number, width: number) => {
    if (height > width) {
        return "portrait";
    } else {
        return "landscape";
    }
};
