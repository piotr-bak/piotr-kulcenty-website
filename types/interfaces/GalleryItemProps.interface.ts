export interface GalleryItemProps {
    src: string;
    alt: string;
    size: "lg" | "md";
    orientation: "portrait" | "landscape";
    description?: string;
}
