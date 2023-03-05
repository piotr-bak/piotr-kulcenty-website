"use client";
import { Container } from "@/components/shared/Container/Container";
import { GalleryContainer } from "@/components/shared/GalleryElements/GalleryContainer/GalleryContainer";
import { GalleryMode } from "@/types";
import { parseConfig } from "@/lib/helpers";
import configFile from "@/data/gallery/home.json";

export default function Page() {
    const galleryItems = parseConfig(configFile);
    const mode: GalleryMode = "full";
    return (
        <div>
            <Container>
                <GalleryContainer configData={galleryItems} mode={mode} />
            </Container>
        </div>
    );
}
