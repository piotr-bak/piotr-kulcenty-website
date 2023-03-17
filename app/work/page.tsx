import { Container } from "@/components/UI/Layout/Container/Container";
import { GalleryContainer } from "@/components/Gallery/GalleryContainer/GalleryContainer";
import { Footnote } from "@/components/UI/shared/Footnote/Footnote";
import { GalleryMode } from "@/types";
import { parseConfig } from "@/lib/helpers";
import configFile from "@/data/gallery/work.json";

export default function Page() {
    const galleryItems = parseConfig(configFile);
    const mode: GalleryMode = "compact";
    return (
        <Container>
            <GalleryContainer configData={galleryItems} mode={mode} />
            <Footnote />
        </Container>
    );
}
