import { Container } from "@/components/UI/Layout/Container/Container";
import { GalleryContainer } from "@/components/Gallery/GalleryContainer/GalleryContainer";
import { Footnote } from "@/components/UI/shared/Footnote/Footnote";
import { GalleryMode } from "@/types";
import { parseGalleryData } from "@/lib/helpers/gallery";
import dataFile from "@/public/gallery/data/work.json";
import { ParsedGalleryData } from "@/types/interfaces";

export default function Page() {
    const galleryData: ParsedGalleryData = parseGalleryData(dataFile);
    const mode: GalleryMode = "compact";
    const galleryID = galleryData.id;

    return (
        <Container>
            <GalleryContainer
                galleryData={galleryData}
                mode={mode}
                galleryID={galleryID}
            />
            <Footnote />
        </Container>
    );
}
