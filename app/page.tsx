import { Container } from "@/components/Layout/Container/Container";
import { SplashScreen } from "@/components/SplashScreen/SplashScreen";
import { GalleryMode } from "@/types";
import { parseGalleryData } from "@/lib/helpers/gallery";
import dataFile from "@/public/gallery/data/home.json";
import { ParsedGalleryData } from "@/types/interfaces";
import { HomeSlider } from "@/components/Home/HomeSlider";

export const metadata = {
    title: "Piotr Kulcenty Violins",
    themeColor: "#000000",
};

export default function Page() {
    const galleryData: ParsedGalleryData = parseGalleryData(dataFile);
    const mode: GalleryMode = "full";
    const galleryID = galleryData.id;

    return (
        <Container>
            <SplashScreen />
            <HomeSlider />
        </Container>
    );
}
