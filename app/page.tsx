"use client";
import { Container } from "@/components/shared/Container/Container";
import { GalleryContainer } from "@/components/shared/GalleryElements/GalleryContainer/GalleryContainer";
import { parseConfig } from "@/lib/helpers";
import configFile from "@/data/gallery/home.json";

export default function Page() {
    const galleryItems = parseConfig(configFile);
    return (
        <div>
            <Container>
                <GalleryContainer configData={galleryItems} />
            </Container>
        </div>
    );
}
