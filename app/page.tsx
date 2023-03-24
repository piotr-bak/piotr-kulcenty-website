import { Container } from "@/components/UI/Layout/Container/Container";
import { GalleryContainer } from "@/components/Gallery/GalleryContainer/GalleryContainer";
import { SplashScreen } from "@/components/SplashScreen/SplashScreen";
import { Footnote } from "@/components/UI/shared/Footnote/Footnote";
import { GalleryMode } from "@/types";
import { parseConfig } from "@/lib/helpers";
import configFile from "@/data/gallery/home.json";

export default function Page() {
    const galleryItems = parseConfig(configFile);
    const mode: GalleryMode = "full";

    /*The Gallery IDs are needed for Modal previous/next image functionality. 
    IDs must remain the same between route (re)visists in order to prevent the
    data within SlideshowContext from inflating unnecessarily.
    Resorting to useEffect to assign IDs would force opting-out from server-side
    rendering of the Page().
    Assigning IDs using a helper function, in the other hand, could cause
    undesired behavior (such as setting the galleryID to "undefined") when user
    visits the Home route for the very first time.
    Gallery IDs are required only for the Modal slideshow, so there is no real
    justification for any overengineering here.
    */
    const galleryID = "HOME_GALLERY";

    return (
        <Container>
            <SplashScreen />
            <GalleryContainer
                configData={galleryItems}
                mode={mode}
                galleryID={galleryID}
            />
            <Footnote />
        </Container>
    );
}
