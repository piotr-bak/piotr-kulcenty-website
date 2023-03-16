import { Container } from "@/components/shared/Container/Container";
import { GalleryContainer } from "@/components/Gallery/GalleryContainer/GalleryContainer";
import { SplashScreen } from "@/components/SplashScreen/SplashScreen";
import { Footnote } from "@/components/shared/Footnote/Footnote";
import { GalleryMode } from "@/types";
import { parseConfig } from "@/lib/helpers";
import configFile from "@/data/gallery/home.json";

export default function Page() {
    const galleryItems = parseConfig(configFile);
    const mode: GalleryMode = "full";
    return (
        <Container>
            <SplashScreen />
            <GalleryContainer configData={galleryItems} mode={mode} />
            <Footnote />
        </Container>
    );
}
