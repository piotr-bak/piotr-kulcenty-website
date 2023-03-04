"use client";
import { Container } from "@/components/shared/Container/Container";
import { GalleryContainer } from "@/components/shared/GalleryElements/GalleryContainer/GalleryContainer";
import configFile from "@/data/gallery/home.json";

export default function Page() {
    if (!Array.isArray(configFile)) {
        return null; // or some other error handling mechanism
    }
    let galleryItems = JSON.parse(JSON.stringify(configFile));
    return (
        <div>
            <Container>
                <GalleryContainer configData={galleryItems} />
            </Container>
        </div>
    );
}
