import { Container } from "@/components/UI/Layout/Container/Container";
import { GalleryContainer } from "@/components/Gallery/GalleryContainer/GalleryContainer";
import { SplashScreen } from "@/components/SplashScreen/SplashScreen";
import { Footnote } from "@/components/UI/shared/Footnote/Footnote";
import { GalleryMode } from "@/types";
import { parseGalleryData } from "@/lib/helpers";
import dataFile from "@/public/gallery/data/home.json";
import { ParsedGalleryData } from "@/types/interfaces";

export default function Page() {
    const galleryData: ParsedGalleryData = parseGalleryData(dataFile);
    const mode: GalleryMode = "full";
    const galleryID = galleryData.id;

    return (
        <Container>
            <SplashScreen />
            <GalleryContainer
                galleryData={galleryData}
                mode={mode}
                galleryID={galleryID}
            />
            <Footnote />
        </Container>
    );
}
